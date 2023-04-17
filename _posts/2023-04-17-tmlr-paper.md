---
layout: post
title: TMLR paper
---

We got a paper published in TMLR on the connection between variational inference and generative flow networks. 

Heiko Zimmermann, Fredrik Lindsten, Jan-Willem van de Meent, Christian A Naesseth, **A Variational Perspective on Generative Flow Networks**, TMLR 2023. [link](https://openreview.net/forum?id=AZ4GobeSLq)

This line of work started with a research visit by Heiko to my group in Linköping. It was very nice hosting you, and it's equally nice to see this outcome of the collaboration!


_Abstract:_
Generative flow networks (GFNs) are a class of probabilistic models for sequential sampling of composite objects, proportional to a target distribution that is defined in terms of an energy function or a reward. GFNs are typically trained using a flow matching or trajectory balance objective, which matches forward and backward transition models over trajectories. In this work we introduce a variational objective for training GFNs, which is a convex combination of the reverse- and forward KL divergences, and compare it to the trajectory balance objective when sampling from the forward- and backward model, respectively. We show that, in certain settings, variational inference for GFNs is equivalent to minimizing the trajectory balance objective, in the sense that both methods compute the same score-function gradient. This insight suggests that in these settings, control variates, which are commonly used to reduce the variance of score-function gradient estimates, can also be used with the trajectory balance objective. We evaluate our findings and the performance of the proposed variational objective numerically by comparing it to the trajectory balance objective on two synthetic tasks.
