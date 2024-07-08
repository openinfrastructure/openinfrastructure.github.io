---
title: Incremental Rollouts
description: Incremental rollouts is a safer way to roll out production changes which was proven successful at an infamous social media company.
---

## Customer Testimonial

> "Open Infrastructure Services helped Twitter successfully perform a complete overhaul of it's production configuration management system. This started with addressing observability shortcomings and scalability bottlenecks, resulting in a 80% performance improvement. After attaining stability, Open Infrastructure delivered a safe change rollout feature, which enabled configuration changes to be deployed incrementally over time with detection of anomalies. The impact is that Twitter site incidents attributed to configuration changes, once a regular occurrence, have been virtually eliminated, with zero observed for one year as of September 2022."
>
> Patrick Newman, Sr Engineering Manager, Core Infrastructure Services SRE, 2019-2022

## Overview

Are Puppet code changes rolling out too fast for your organization? Have you
experienced service degradation due to a Puppet code change that affected all
of your managed nodes at once? Are you looking for a way to ensure Puppet code
changes are enforced incrementally across successive failure domains?

At Open Infrastructure Services, we designed an incremental rollout solution
for a social media company with hundreds of thousands of managed nodes to
guarantee that their critical Puppet code changes could not impact the entire
fleet all at once.

Our incremental rollout solution:

- Provides templates and patterns for segmenting the fleet of managed nodes based on ENC data (e.g. datacenter), facts, or percentage (e.g. 10% of the entire fleet).
- Includes pre-determined rollout schedules that codify the organization's preferred rollout cadence.
- Allows a rollout to be paused, delayed, or backed out based on simple feature flag triggers.
- Integrates with automated canary analysis tooling to verify that code changes did not result in an increase of Puppet errors or exceed service level indicator (SLI) thresholds.

Following the implementation of the incremental rollout solution, the number of
site incidents for this organization caused by Puppet were reduced from one per
month down to zero observed for an entire year.

Allow us to adapt our incremental rollout solution for your organizational
needs. Contact us today and let's talk about how we can help!
