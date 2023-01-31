---
layout: singlepage
description: "Success Stories and Testimonials"
author: jeff
---

<div markdown="1" class="container">
<h2 class="section-heading text-center">Recent Successes</h2>
<h3 class="section-subheading text-center text-muted">Twitter</h3>

Developed a solution for incrementally applying Puppet code changes across scheduled failure domains (Puppet IC).

* IC functions as a feature-flag workflow in the Puppet DSL, allowing for pausing or rolling back individual changes.
* IC reduced Puppet-related site incidents from multiple per-quarter to zero per year following its release.

Developed a solution for automated canary analysis of Puppet code changes.

* Puppet code changes causing an increase in errors are automatically paused using the IC workflow.
* Code changes that would normally result in site incidents are instead confined to a blast radius of 1% of the fleet.

Optimized Puppetserver infrastructure resulting in a ~50% reduction in server costs while improving performance.

* Developed a caching layer that, combined with configuration tuning, resulted in the elimination of Puppetserver death spirals.
* Developed a Systemd-based solution for running multiple Puppetserver processes on a bare-metal host.

Developed a cloud-based visibility solution for tracking Puppet resource changes at a scale of millions per-day.

<h2 class="section-heading text-center">Testimonials</h2>

_"[Open Infrastructure Services, LLC] helped Twitter successfully perform a
complete overhaul of its production configuration management system.
The impact is that Twitter site incidents attributed to
configuration changes, once a regular occurrence, have been
virtually eliminated, with zero observed for one year as of
September 2022."_ - __Patrick Newman, Sr. Engineering Manager, Core Infrastructure Services SRE @ Twitter, 2019-2022__
</div>
