---
layout: pub
section: Publications
top: Publications
permalink: /pubs/paper-pyteck/
title: "PyTeCK: a Python-based automatic testing package for chemical kinetic models"
author: "Kyle E. Niemeyer"
date: 2016
conference: "Journal of Computational Physics"
url: http://conference.scipy.org/proceedings/scipy2016/kyle_niemeyer.html
supplement:
citation: "Kyle E. Niemeyer (2016), PyTeCK: a Python-based automatic testing package for chemical kinetic models, Proceedings of the 15th Python in Science Conference, 82--89. Ed: Sebastian Benthall and Scott Rostrup."
pdf: http://conference.scipy.org/proceedings/scipy2016/pdfs/kyle_niemeyer.pdf
---

## Abstract

Combustion simulations require detailed chemical kinetic models to predict fuel oxidation, heat release, and pollutant emissions. These models are typically validated using qualitative rather than quantitative comparisons with limited sets of experimental data. This work introduces PyTeCK, an open-source Python-based package for automatic testing of chemical kinetic models. Given a model of interest, PyTeCK automatically parses experimental datasets encoded in a YAML format, validates the self-consistency of each dataset, and performs simulations for each experimental data point. It then reports a quantitative metric of the model's performance, based on the discrepancy between experimental and simulated values and weighted by experimental variance. The initial version of PyTeCK supports shock tube and rapid compression machine experiments that measure autoignition delay.

## BibTeX

    @inproceedings{kyle_niemeyer-proc-scipy-2016,
        Author = {Kyle E Niemeyer},
        Booktitle = {Proceedings of the 15th Python in Science Conference},
        Editor = {Sebastian Benthall and Scott Rostrup},
        Pages = {82--89},
        Title = /\{/\{PyTeCK}: a {Python}-based automatic testing package for chemical kinetic models},
        Year = 2016
    }
