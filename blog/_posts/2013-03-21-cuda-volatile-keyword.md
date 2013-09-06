--- 
layout: blog-post
title: Importance of CUDA volatile keyword with shared memory
---

When coordinating information between threads in a warp via shared memory in CUDA, you might need to use the `volatile` keyword when declaring the shared memory array, as in `volatile __shared__ int array[SIZE]`.

In particular, when one thread in the warp (I like to call it the "warp leader") writes to a location in the shared memory that the rest of the warp threads ("warp workers") need to read, I found that the volatile keyword is required so that all the workers see the written value.

For example:

	__shared__ array[NUM_WARPS];
	if (threadIdx.x == 0) {
		array[warpId] = 5;
	}
	
	if (array[warpId] == 5) { 
		do something
	}

In this example, I found that without declaring the shared memory array to be volatile, only the warp leader moves into the second conditional statement. Apparently, the CUDA compiler likes use registers in place of actually writing to shared memory. It can also be helpful in reducing register usage, see [this NVIDIA Developer forum thread](https://devtalk.nvidia.com/default/topic/405513/cuda-programming-and-performance/getting-nvcc-to-consolidate-registers/).

I should note that this could be avoided by syncing all the threads in the block with `__syncthreads()`, but in my case I want only the warp workers to be synced---I don't need the entire block.