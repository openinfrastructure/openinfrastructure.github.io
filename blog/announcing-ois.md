---
date: 2015-09-20 18:33:10
title:  "Announcing Open Infrastructure Services, LLC"
authors: ["jmccune"]
---

Hello, World!

I'm a little sad to say I've left [Puppet Labs][puppetlabs] after over 5 years
working for the company and working on [Puppet][puppet].  It was a difficult
decision, but I'm pleased to announce that I've decided to start my own
independent consulting business, [Open Infrastructure Services, LLC][website].
I'll be helping clients with their Puppet related problem while also focusing
on bringing creative solutions to bear on complex infrastructures.  Please
[email me][email] for more information, I'd love to hear how I could help you
and your business.

```puppet
company { "Open Infrastructure Services, LLC":
  ensure  => running,
  founder => "Jeff McCune",
  website => "http://openinfrastructure.co",
  email   => "jeff@openinfrastructure.co",
}
```

[puppetlabs]: http://puppetlabs.com
[email]: mailto://jeff@openinfrastructure.co
[website]: http://openinfrastructure.co
[puppet]: http://github.com/puppetlabs/puppet