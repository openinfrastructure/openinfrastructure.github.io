---
title: Incremental Rollouts
linkTitle: Incremental Rollouts
description: Incremental rollouts is a safer way to roll out production changes which was proven successful at an infamous social media company.
weight: 1
---

Overview
---

Are Puppet code changes rolling out too fast for your organization? Have you
experienced service degradation due to a Puppet code change that affected all
of your managed nodes at once? Are you looking for a way to ensure Puppet code
changes are enforced incrementally across successive failure domains?

At Open Infrastructure, we designed an incremental rollout solution for a social
media company with hundreds of thousands of managed nodes to guarantee that
their critical Puppet code changes could not affect the entire fleet all at
once.

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
