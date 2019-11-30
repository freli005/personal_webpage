---
layout: post
title: Three NeurIPS papers accepted
---

I'm very happy to announce that we got three papers accepted for NeurIPS this year, including one *Oral* and one *Spotlight*!

[Parameter elimination in particle Gibbs sampling](https://arxiv.org/abs/1910.14145) **[Oral]**  
*Anna Wigren, Riccardo Sven Risuleo, Lawrence Murray, Fredrik Lindsten*

Bayesian inference in state-space models is challenging due to high-dimensional state trajectories. A viable approach is particle Markov chain Monte Carlo (PMCMC), combining MCMC and sequential Monte Carlo to form ``exact approximations'' to otherwise-intractable MCMC methods. The performance of the approximation is limited to that of the exact method. We focus on particle Gibbs (PG) and particle Gibbs with ancestor sampling (PGAS), improving their performance beyond that of the ideal Gibbs sampler (which they approximate) by marginalizing out one or more parameters. This is possible when the parameter(s) has a conjugate prior relationship with the complete data likelihood. Marginalization yields a non-Markov model for inference, but we show that, in contrast to the general case, the methods still scale linearly in time. While marginalization can be cumbersome to implement, recent advances in probabilistic programming have enabled its automation. We demonstrate how the marginalized methods are viable as efficient inference backends in probabilistic programming, and demonstrate with examples in ecology and epidemiology.


[Calibration tests in multi-class classification: A unifying framework](https://arxiv.org/abs/1910.11385) **[Spotlight]**  
*David Widmann, Fredrik Lindsten, Dave Zachariah*

In safety-critical applications a probabilistic model is usually required to be calibrated, i.e., to capture the uncertainty of its predictions accurately. In multi-class classification, calibration of the maximal predictions only is often not sufficient. We propose and study calibration measures for multi-class classification that generalize existing measures such as the expected calibration error, the maximum calibration error, and the maximum mean calibration error. For a specific class of measures based on matrix-valued kernels different consistent and unbiased estimators are suggested and evaluated empirically. Importantly, these estimators can be interpreted as test statistics associated with well-defined probabilities of false rejection, significantly improving the interpretability of calibration measures, which otherwise lack any meaningful unit or scale.

[Pseudo-Extended Markov chain Monte Carlo](https://arxiv.org/abs/1708.05239)  
*Chris Nemeth, Fredrik Lindsten, Maurizio Filippone, James Hensman*

Sampling from posterior distributions using Markov chain Monte Carlo (MCMC) methods can require an exhaustive number of iterations, particularly when the posterior is multi-modal as the MCMC sampler can become trapped in a local mode for a large number of iterations. In this paper, we introduce the pseudo-extended MCMC method as a simple approach for improving the mixing of the MCMC sampler for multi-modal posterior distributions. The pseudo-extended method augments the state-space of the posterior using pseudo-samples as auxiliary variables. On the extended space, the modes of the posterior are connected, which allows the MCMC sampler to easily move between well-separated posterior modes. We demonstrate that the pseudo-extended approach delivers improved MCMC sampling over the Hamiltonian Monte Carlo algorithm on multi-modal posteriors, including Boltzmann machines and models with sparsity-inducing priors. 
