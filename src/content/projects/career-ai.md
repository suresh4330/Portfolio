---
title: 'CareerAI — Machine Learning Career Recommender'
description: 'Full-stack machine learning web application analyzing user aptitude and performance inputs to recommend top 5 career paths with confidence scores using Gradient Boosting.'
category: 'Machine Learning'
problem: 'Students and professionals frequently navigate career decisions without objective alignment between their academic metrics, cognitive aptitudes, and real industry expectations.'
features:
  - 'Multi-factor feature engineering over academic scores, cognitive skills, and domain interests'
  - 'Supervised Gradient Boosting classifier trained for multi-class career pathway prediction'
  - 'Outputs top 5 ranked career trajectories with granular confidence percentages'
  - 'Clean, responsive frontend layout coupled with a lightweight Python Flask REST backend'
metrics: 'Top 5 Predictions with Confidence'
tags: ['Python', 'scikit-learn', 'Gradient Boosting', 'Flask', 'Pandas', 'NumPy', 'HTML5', 'CSS3', 'JavaScript']
featured: true
order: 4
github: 'https://github.com/suresh4330/Career-ai'
image: '/projects/career-guidance.svg'
---

## Overview

**CareerAI** is a full-stack machine learning web application designed to help individuals discover optimal career trajectories using empirical performance and aptitude indicators.

## Architecture & Machine Learning Pipeline

- **Feature Preprocessing**: Missing value imputation, categorical encoding, and StandardScaler transformations with Pandas and NumPy.
- **Gradient Boosting Classifier**: Trained using scikit-learn to handle complex non-linear feature interactions and predict multi-class career outcomes.
- **Top-5 Confidence Ranking**: Generates calibrated probability estimates for the top 5 most compatible career avenues.
- **Serving Architecture**: Served via a Flask REST API and a responsive web interface.

