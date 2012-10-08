--- 
layout: blog-post
title: Careful with the subtraction assignment operator in C
---

This might be obvious to someone who majored in computer science (and does make sense if you think about it), but a little care is required when using the subtraction assignment operator (`-=`) in C and related languages.

For example, if I wanted to shorten `a = a - b - c` by using the subtraction assignment operator, I might (carelessly) replace it with: `a -= b - c`

Unfortunately, this is wrong. The operator is not a simple replacement of `a = a -` with `a -=`. Instead, whatever is on the right-hand side of `-=` is subtracted from the left-hand side altogether. In other words, `a -= b - c` is equivalent to `a = a - (b - c) = a - b + c`, which is not the desired operation.

Instead, the correct operation is: `a -= b + c`.
