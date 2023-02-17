---
date:   2016-08-21 12:48:00
title:  "Puppet Enterprise Node Classification Backup & Restore with ncio"
linkTitle: "Puppet Enterprise Node Classification Backup & Restore with ncio"
description: "Utility to backup and restore PE Node Classification data"
author: Jeff McCune ([jeff@openinfrastructure.co])
---

I'm happy to announce [ncio][ncio], a small command line utility to backup and
restore Puppet Enterprise Node Classification data.

A customer recently needed to automate the process of backing up and restoring
[Puppet Enterprise][puppet].  Most of the work involved in accomplishing this
goal is fairly straight-forward.  The majority of the Puppet configuration is
stored in version control in a [Control Repository][control-repo] and Git is
incredibly easy to backup and restore.  Most customers I work with don't mind
losing data stored in PuppetDB because Puppet reports, resource information,
and facts are automatically re-populated as nodes check in after the system is
restored.  The certificates used by Puppet are also fairly straight forward to
backup as they live on the local filesystem.

The only service that was difficult to backup using normal filesystem tools is
the Node Classification Service.  The node classifier stores critical
information and as a result it needs to be backed up and restored along side
all of these other resources.

The [Node classification v1 API][nc-api] is an excellent mechanism to retrieve
and restore node classification data, but the task of using the API is largely
left as an exercise for the reader.  In order to help with this common problem,
I wrote a small utility called ncio (node classification input / ouput). If
you'd like to easily get a dump of all node classification data in
pretty-printed JSON, transform a backup for restoration on a different PE
Monolithic Master, or restore a backup then this tool is for you.

The tool is distributed and updated on [rubygems][ncio-gem] in an effort to make
it easiy to install and upgrade in the future.

Here's how to get started:

Installation
===

Installation is straight-forward thanks to Puppet Enterprise shipping with the
gem command:

    $ sudo /opt/puppetlabs/puppet/bin/gem install ncio
    Successfully installed ncio-1.1.0
    Parsing documentation for ncio-1.1.0
    Installing ri documentation for ncio-1.1.0
    Done installing documentation for ncio after 0 seconds
    1 gem installed

Usage
===

The command runs best from a PE Monolithic Master.  The tool automatically uses
SSL certificates which are already present to make setup as easy as possible.

    sudo -H -u pe-puppet /opt/puppetlabs/puppet/bin/ncio backup > /var/tmp/backup.json
    I, [2016-06-28T19:25:55.507684 #2992]  INFO -- : Backup completed successfully!

Retrying Connections
---

When automating a backup from cron, it's recommended to use the
`--retry-connections` global option to make the backup as robust as possible.
This option allows `ncio` to retry in certain situations, e.g. when the
puppetserver service is restarting.

Restore Pipelines
---

The command is designed to send a backup to standard output and restore from
standard input.  This allows backup and restore pipelines.  In this example a
backup is taken on `master1`, transformed so that it can be restored on
`master2`, then restored on `master2`:

```bash
export PATH="/opt/pupeptlabs/puppet/bin:$PATH"
ncio --uri https://master1.puppet.vm:4433/classification-api/v1 backup \
 | ncio transform --hostname master1.puppet.vm:master2.puppet.vm \
 | ncio --uri https://master2.puppet.vm:4433/classification-api/v1 restore
```

Command overview
===

Global options:

```
$ ncio --help
usage: ncio [GLOBAL OPTIONS] SUBCOMMAND [ARGS]
Sub Commands:

  backup     Backup Node Classification resources
  restore    Restore Node Classification resources
  transform  Transform a backup, replacing hostnames

Quick Start: On the host of the Node Classifier service, as root or pe-puppet
(to read certs and keys)

    /opt/puppetlabs/puppet/bin/ncio backup > groups.$(date +%s).json
    /opt/puppetlabs/puppet/bin/ncio restore < groups.1467151827.json

Transformation:

    ncio --uri https://master1.puppet.vm:4433/classification-api/v1 backup \
     | ncio transform --hostname master1.puppet.vm:master2.puppet.vm \
     | ncio --uri https://master2.puppet.vm:4433/classification-api/v1 restore

Global options: (Note, command line arguments supersede ENV vars in {}'s)
  -u, --uri=<s>                Node Classifier service uri {NCIO_URI}
                               (default: https://localhost:4433/classifier-api/v1)
  -c, --cert=<s>               White listed client SSL cert {NCIO_CERT}
                               See: https://goo.gl/zCjncC (default:
                               /etc/puppetlabs/puppet/ssl/certs/pe-internal-orchestrator.pem)
  -k, --key=<s>                Client RSA key, must match certificate {NCIO_KEY} (default:
                               /etc/puppetlabs/puppet/ssl/private_keys/pe-internal-orchestrator.pem)
  -a, --cacert=<s>             CA Cert to authenticate the service uri {NCIO_CACERT}
                               (default: /etc/puppetlabs/puppet/ssl/certs/ca.pem)
  -l, --logto=<s>              Log file to write to or keywords STDOUT,
                               STDERR {NCIO_LOGTO} (default: STDERR)
  -s, --syslog, --no-syslog    Log to syslog (default: true)
  -v, --verbose                Set log level to INFO
  -d, --debug                  Set log level to DEBUG
  -r, --retry-connections      Retry API connections, e.g. waiting for the
                               service to come online. {NCIO_RETRY_CONNECTIONS}
  -o, --connect-timeout=<i>    Retry <i> seconds if --retry-connections=true
                               {NCIO_CONNECT_TIMEOUT} (default: 120)
  -e, --version                Print version and exit
  -h, --help                   Show this message
```

Backup options
---

```
$ ncio backup --help
Node Classification backup options:
  -g, --groups, --no-groups    Operate against NC groups.  See: https://goo.gl/QD6ZdW (default: true)
  -f, --file=<s>               File to operate against {NCIO_FILE} or STDOUT, STDERR (default: STDOUT)
  -h, --help                   Show this message
```

Transform options
---

```
$ ncio transform --help
Node Classification transformations
Note: Currently only Monolithic (All-in-one) deployments are supported.

Transformation matches against class names assigned to groups.  Transformation
of hostnames happen against rules assigned to groups and class parameters for
matching classes.

Options:
  -c, --class-matcher=<s>    Regexp matching classes assigned to groups.
                             Passed to Regexp.new() (default: ^puppet_enterprise)
  -i, --input=<s>            Input file path or keywords STDIN, STDOUT, STDERR (default: STDIN)
  -o, --output=<s>           Output file path or keywords STDIN, STDOUT, STDERR (default: STDOUT)
  -h, --hostname=<s+>        Replace the fully qualified domain name on the left with the
                             right, separated with a :
                             e.g --hostname master1.acme.com:master2.acme.com
  -e, --help                 Show this message
```

Restore options
---

```
$ ncio restore --help
Node Classification restore options:
  -g, --groups, --no-groups    Operate against NC groups.
                               See: https://goo.gl/QD6ZdW (default: true)
  -f, --file=<s>               File to operate against {NCIO_FILE} or STDOUT,
                               STDERR (default: STDIN)
  -h, --help                   Show this message
```

Hopefully you find [ncio][ncio] useful.  If so, please let me know!  If you run
into any issues or would like to see additional features, please open up an
issue on the project page.

[puppet]: https://puppet.com/product
[control-repo]: https://github.com/puppetlabs/control-repo
[nc-api]: https://docs.puppet.com/pe/2016.2/nc_index.html
[ncio]: https://github.com/jeffmccune/ncio
[ncio-gem]: https://rubygems.org/gems/ncio/
