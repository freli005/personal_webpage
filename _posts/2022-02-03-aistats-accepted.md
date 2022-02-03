---
layout: post
title: AISTATS paper accepted
---
My PhD student Amanda Olmin and I got a paper accepted for [AISTATS 2022](http://aistats.org/aistats2022/)!

The [paper](https://arxiv.org/abs/2110.03321) is called _Robustness and reliability when training with noisy labels_. We investigate the effect of imperfect/noisy labels in the training data when learning a classifier, and in particular how this affect the uncertainty quantification capabilities of the resulting model. We find that (a type of) loss functions that are designed to be robust to label noise still fail to produce reliable uncertainty estimates. Furthermore, these loss functions are only asymptotically robust and we illustrate that they can still overfit to the noise in the data. The bottom line is that there is little theoretical support for prefering a robust loss function over a strictly proper one. Our paper thus identifies an "open problem" in designing new loss functions that are robust not only in terms of accuracy, but also in terms of reliability. 

