---
layout: post
title: ICML paper accepted
---

Building on our previous work on [Deep Gaussian Markov Random Fields](https://proceedings.mlr.press/v119/siden20a.html), we -- Joel Oskarsson, Per Sidén and I -- got a paper accepted for the [International Conference on Machine Learning (ICML)](https://icml.cc/). We generalize the method from lattice graphs to general graphs (turns out that it was not as straightforward as simply replacing the CNN with a GNN), propose a better variational approximation, and make the method scale to large graphs by efficient log-determinant approximations.

J. Oskarsson, P. Sidén and F. Lindsten, **Scalable Deep Gaussian Markov Random Fields for General Graphs**, ICML 2022.

_Abstract:_
Machine learning methods on graphs have proven useful in many applications due to their ability to handle generally structured data. The framework of Gaussian Markov Random Fields (GMRFs) provides a principled way to define Gaussian models on graphs by utilizing their sparsity structure. We propose a flexible GMRF model for general graphs built on the multi-layer structure of Deep GMRFs, originally proposed for lattice graphs only. By designing a new type of layer we enable the model to scale to large graphs. The layer is constructed to allow for efficient training using variational inference and existing software frameworks for Graph Neural Networks. For a Gaussian likelihood, close to exact Bayesian inference is available for the latent field. This allows for making predictions with accompanying uncertainty estimates. The usefulness of the proposed model is verified by experiments on a number of synthetic and real world datasets, where it compares favorably to other both Bayesian and deep learning methods.