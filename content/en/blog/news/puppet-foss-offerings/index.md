---
title: "New Puppet Service Offerings"
date: 2023-02-23 12:00:00
description: "Take advantage of our extensive Puppet expertise to achieve your goals."
authors: ["Gary Larizza"]
---

**TL;DR: Open Infrastructure Services (OIS) is proud to announce
[several new Puppet service offerings][puppetservices] intended for customers of
varying size, from hundreds to millions of managed nodes.**

The commonality that unites the three of us at Open Infrastructure Services
(OIS) is the fact that at some point in time, we all were members of Puppet
Inc.'s Professional Services team. We were the engineers that were dispatched to
solve the most complex customer issues, and together we have more than 25 years
of experience in designing, customizing, and troubleshooting Puppet deployments.
It's that experience that allows us to solve real world problems in a
predictable and timely manner, and we value our reputation of being able to
deliver for our customers.

That's why today we're proud to announce [several new Puppet service
offerings][puppetservices] available now to organizations of any size! While
it's not an exhaustive list, it does comprise some of the most popular features
we've built in the past 6 years.

## Safer Puppet Changes

Are Puppet changes causing incidents in your organization? Have you experienced
service outages due to a Puppet code change which rolls out too quickly to
control? Are you looking for a proven method to target a small group of
nodes for a risky change, validate the results, then safely release it to the
rest of your managed fleet?

This is a problem all large Puppet deployments need to solve, and we recently
[designed a solution][ic] for a large social media company that allowed them to
reduce Puppet-related incidents from at least one per-month, to zero reported
for more than an entire year.

The existing tools to solve this problem are ineffective at the scale of
hundreds of thousands to millions of managed nodes. As a result, we developed a
new, effective solution which:

1.  Unlocks the ability to perform canary analysis on Puppet changes.
2.  Reduces engineering time by adding scheduling policies to risky changes.
3.  Leverages cloud native advancements in observability and traffic management.
4.  Uses the same workflows as are used for application level container rollouts.

We'd love to share how our solution reduces the risk of production changes.
Contact us today to learn more.

## Advanced Reporting

Does your organization struggle with these questions about production changes?

- When was a recent production change enforced on all managed nodes?
- Was the production change successful or were there failures?
- Was a recent Puppet change a contributing factor to a production incident?
- What are the most common resource failures across teams?
- Are nodes no longer being managed at all?

Many of these questions can be answered by the Puppet Enterprise Dashboard, but
what if your organization doesn't use Puppet Enterprise or has outgrown Puppet
Enterprise? PuppetDB is open source and may help at smaller scales, but what if
the number of nodes in your organization exceeds PuppetDB's limits?

We recently built an advanced big data reporting solution using [BigQuery][bq]
and [Data Studio][datastudio] to answer these questions. This solution worked
well in production, scaling to hundreds of thousands of managed nodes and
millions of Puppet run reports per day.

We're available to tailor a reporting solution to the needs of your
organization; contact us and let's talk about your project goals.

## Module Development

The [Puppet Forge][forge] has grown to contain thousands of Puppet modules
managing as many applications and technologies, but it never seems to have the
specific module that does what you need. And while the Puppet language (DSL) is
legible and approachable, it's VERY easy for a "simple fix" to trigger a cascade
of unintended consequences.

Wouldn't it be great if you could explain what you need and have someone write
you a customized solution, conforming to best practices, complete with tests and
USABLE documentation?

That's exactly the kind of service we offer at OIS.

The Puppet experts at OIS have been writing Puppet modules since 2009, and have
been following (and creating) best practices through to today. We literally
[wrote the book on the subject][pro-puppet]. Whether it's writing a completely
new module from scratch, or adding new functionality to existing code, we are
here to help you work smarter, not harder.

Contact us today and let's talk Puppet modules.

## Open Source Puppet Support

Free and open-source software (FOSS) is a bedrock principle at OIS - it puts the
"Open" in "Open Infrastructure!" We also understand that customers using the
FOSS version of Puppet have limited options when it comes to support plans. That's
why we offer first class support for ALL Puppet users, regardless of whether you're
using the Enterprise or FOSS editions. It doesn't matter how old your code is or
what your server stack looks like, we are here to help.

Whether you have a specific problem that needs a solution, or simply need the
ability to contact the experts when problems arise, we can craft a support plan
to fit your needs. Contact us today and let's discuss your options.

---

As we said above, this is not an exhaustive list of every Puppet service we're
able to offer. Do you have a problem that doesn't fit neatly into one of the
offerings above? Contact us and let's start the conversation. Our most impactful
engagements have started this way, and we'd be happy to discuss your goals.

[puppetservices]: {{< ref "services/puppet" >}}
[ic]: {{< ref "services/puppet/incremental-rollouts" >}}
[bq]: https://cloud.google.com/bigquery
[datastudio]: https://datastudio.withgoogle.com/
[forge]: https://forge.puppet.com/
[pro-puppet]: http://www.amazon.com/Pro-Puppet-James-Turnbull/dp/1430230592
