---
layout: post
title: "Containers Security (Linux Kernel Features)"
date:   2019-08-13 
category: Tech
tags: Cyber-Security Container-Security Linux-Kernel
author: Muhammad Magdy
permalink: /:title
---

Container-based virtualization is a lightweight virtualization approach that uses the host kernel to run multiple virtual environments. Linux containers are more preferred than VMs by most of the modern clouds due to its small footprint, fast instantiation. LC makes it easier for developers to build and promote an application and its dependencies as a unit. However, the ecosystem of container security tools is not yet mature enough, as currently there is many research papers addressing Containers Security. In this articel, I will discuss Linux Kernel Features that could help providing a secure, isolated environment for linux containers.


## Namespaces 