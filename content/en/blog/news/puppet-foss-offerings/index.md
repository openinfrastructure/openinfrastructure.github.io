---
title:  "New Puppet Service Offerings!"
date:   2023-02-23 12:00:00
description: "We offer dependable Puppet expertise to help you meet your goals."
authors: ["Gary Larizza"]
---

**TL;DR: Open Infrastructure Services (OIS) is proud to announce
[several new Puppet service offerings][puppetservices] available now to
organizations of any size!**

The commonality that unites the three of us at Open Infrastructure Services
(OIS) is the fact that at some point in time, we all were members of Puppet
Inc.'s Professional Services team. We were the engineers that were dispatched to
solve the most complex customer issues, and together we have more than 25 years
of experience in designing, customizing, and troubleshooting Puppet deployments.
It's that experience that allows us to solve real world problems in a
predictable and timely manner, and we value our reputation of being able to
deliver for our customers!

That's why today we're proud to announce [several new Puppet service
offerings][puppetservices] available now to organizations of any size!  While
it's not an exhaustive list, it does comprise some of the most popular requests
we've received in the past 6 years.

Safer and Slower Puppet Deployments
---

Are Puppet code changes rolling out too fast for your organization? Have you
experienced service degradation due to a Puppet code change that affected all of
your managed nodes at once? Are you looking for a way to quarantine a Puppet
code change to a limited grouping of nodes, and then slowly and safely release
it to the rest of your managed fleet?

This is a problem that all large Puppet deployments will eventually encounter,
and we recently [designed a solution][ic] for a social media company that allowed
them to reduce Puppet-related incidents from at least one per-month, to zero
reported for an entire year.

The existing tools to solve this problem aren't the greatest, which is why we
had to develop a custom solution. We'd be happy to talk through the specifics
with your organization; contact us today!

Advanced Reporting
---

Do you have problems answering some of these questions with your Puppet deployment?

* I pushed up a recent code change - when was that change enforced by all my managed nodes?
* Did the code change occur successfully, or were there any resource failures?
* We're having an outage - have there been any Puppet resource changes or failures in the past 30 minutes?
* What are the most frequent resource failures being experienced during a time period?
* Are any nodes experiencing compilation failures and thus are no longer enforcing resource changes?

Many of those questions can be answered by the Puppet Enterprise Dashboard, but
what if your organization doesn't use Puppet Enterprise?  You can also answer
some of these questions with PuppetDB, but what if your organization manages too
many nodes and PuppetDB can't scale to your needs?

We recently built an advanced reporting solution that utilizes [Google
BigQuery][bq] and [Data Studio][datastudio] to answer these questions, and that
solution has scaled to hundreds of thousands of managed nodes (with data from
millions of Puppet runs per day)!

We're available to tailor a reporting solution to the needs of your organization; contact us and let's talk about your project goals!

Open Source Puppet Support
---

Free and open-source software (FOSS) is a bedrock principle at OIS - it puts the
"Open" in "Open Infrastructure!" We also understand that customers using the
FOSS version of Puppet have limited options when it comes to support plans. That's
why we offer first class support for ALL Puppet users, regardless of whether you're
using the Enterprise or FOSS editions. It doesn't matter how old your code is or
what your server stack looks like, we are here to help!

Whether you have a specific problem that needs a solution, or simply need the
ability to contact the experts when problems arise, we can craft a support plan
to fit your needs. Contact us today and let's discuss your options!

Module Development
---

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

Contact us today and let's talk Puppet modules!

---

As we said above, this is not an exhaustive list of every Puppet service we're
able to offer. Do you have a problem that doesn't fit neatly into one of the
offerings above? Contact us and let's start the conversation. Our most impactful
engagements have started this way, and we'd be happy to discuss your goals!

[puppetservices]: {{< ref "services/puppet" >}}
[ic]: {{< ref "services/puppet/incremental-rollouts" >}}
[bq]: https://cloud.google.com/bigquery
[datastudio]: https://datastudio.withgoogle.com/
[forge]: https://forge.puppet.com/
[pro-puppet]: http://www.amazon.com/Pro-Puppet-James-Turnbull/dp/1430230592