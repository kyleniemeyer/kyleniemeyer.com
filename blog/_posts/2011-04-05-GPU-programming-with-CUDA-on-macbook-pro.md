--- 
layout: blog-post
title: GPU programming with CUDA on MacBook Pro
---

GPU programming has been seeing increased attention recently for research computing applications---check out a [recent Ars Technica article](http://arstechnica.com/science/news/2011/03/high-performance-computing-on-gamer-pcs-part-1-hardware.ars) talking about this.

I’ve started looking into this for combustion-modeling applications, and to get started I wanted to install [NVIDIA’s CUDA toolkit](http://www.nvidia.com/object/cuda_home_new.html) (C-based programming language and drivers to enable computing on GPUs) on my personal MacBook Pro. The baseline MacBook Pros come with an NVIDIA GeForce 320M GPU, and according to the CUDA website this is not a CUDA-supported GPU... however, I found that with not too much work it actually is supported!

Here are the steps I followed:

1. Download CUDA version 3.2 drivers, toolkit (& GFEC patch), SDK, from [here](http://developer.nvidia.com/object/cuda_3_2_downloads.html)
2. Install the drivers
3. Install the toolkit
4. Install the SDK
5. Ensure that your current gcc version is the Apple 4.2 (through `sudo gcc_select` if you’ve installed any others through [MacPorts](http://www.macports.org/), for instance)
6. Add the following lines to your bash profile (.bashrc, .profile, etc):
    - `export PATH=/usr/local/cuda/bin:$PATH`
    - `export DYLD_LIBRARY_PATH=/usr/local/cuda/lib:$DYLD_LIBRARY_PATH`
7. Open Terminal
8. `cd /Developer/GPU Computing/C`
9. `make x86_64=1` (this will compile everything, and should proceed without error, just some notification messages)
10. Now to check that everything is working, `cd bin/darwin/release`
11. Then execute `./deviceQuery` to have it check your system
12. Now play around with some of the demos in that directory! There are some neat ones (including some fluids simulations)

According to deviceQuery, my MacBook Pro has a CUDA capability version 1.2, and a total of 48 cores (6 processors x 8 cores each).
