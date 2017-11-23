---
layout: post
title:  "Update ESXi 6.5 to U1 over SSH"
description: "Overcome No space left on device by enabling swap"
author: jeff
date:   2017-11-22 17:18:00
---

Updating ESXi 6.5 to 6.5 U1, I encountered the following error:

```
[root@esx:~] esxcli software profile update -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml -p ESXi-6.5.0-20170702001-standard
 [InstallationError]
 [Errno 28] No space left on device
       vibs = VMware_locker_tools-light_6.5.0-0.23.5969300
 Please refer to the log file for more details.
```

The solution to this problem is to enable swap.  I'm running this ESXi host on
a single 32GB USB Thumb Drive, so I first had to create a VMFS5 datastore using
the process at [ESXi 6.5 Single USB Thumb
Drive](/news/esxi-single-usb-boot-plus-datastore/).

Once a datastore exists, enable Swap.  Go to Host > System > Swap and activate
swap on your datastore of choice.  In my case there's only one.

![Enable Swap](/img/2017-11-22-esxi-update-command-line/01.png)

Once activated, this process to update ESXi over SSH worked flawlessly:

Enable outbound HTTP connections:

    esxcli network firewall ruleset set -e true -r httpClient

Perform the update:

    esxcli software profile update -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml -p ESXi-6.5.0-20170702001-standard

Lock down HTTP connections after the update:

    esxcli network firewall ruleset set -e false -r httpClient

Reboot the host:

    reboot

For future reference, to see a list of available updates, use

    esxcli software sources profile list -d \
      https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml \
      | awk '/6.5.0/ {print $1}'

```
[root@esx:~] esxcli software sources profile list -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml | awk '/6.5.0/ {print $1}'
ESXi-6.5.0-20170701001s-no-tools
ESXi-6.5.0-20170404001-standard
ESXi-6.5.0-4564106-standard
ESXi-6.5.0-20170104001-standard
ESXi-6.5.0-20171004001-no-tools
ESXi-6.5.0-20170702001-no-tools
ESXi-6.5.0-20170404001-no-tools
ESXi-6.5.0-20170304101-no-tools
ESXi-6.5.0-20171004001-standard
ESXi-6.5.0-20170104001-no-tools
ESXi-6.5.0-4564106-no-tools
ESXi-6.5.0-20170304101-standard
ESXi-6.5.0-20170301001s-standard
ESXi-6.5.0-20170701001s-standard
ESXi-6.5.0-20170304001-standard
ESXi-6.5.0-20170702001-standard
ESXi-6.5.0-20170304001-no-tools
ESXi-6.5.0-20170301001s-no-tools
```
