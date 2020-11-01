

Container-based virtualization is a lightweight virtualization approach that uses the host kernel to run multiple virtual environments. Linux containers are more preferred than VMs by most of the modern clouds due to its small footprint, fast instantiation. containers make it easier for developers to build and promote an application and its dependencies as a unit. However, the ecosystem of container security tools is not yet mature enough, as currently there is many research papers addressing Containers Security. In this article, I will discuss Linux Kernel Features that could help providing a secure, isolated environment for Linux containers.


## Namespaces   

Namespaces perform the job of partitioning the kernel resources for a set of processes. In order to ensure the isolation of processes that are running in a container to blind them from seeing other processes running in a different container or in the host. Namespace divides kernel global resources into isolated instance. all container's processes run as a child processes within the same namespace.   


## Control Groups (Cgroups)   

Cgroups are a Linux feature that responsible for accounting and limitation of resources usage. They help ensure that each container takes its fair share of resources like CPU, System Memory, Input/Output (I/O), Network Bandwidth ..etc. and also prevent one container from all the available resource and starving the other containers.   


## Capabilities   

Linux Kernel Capabilities goal is to split up root privileges into multiple pieces. So that applications, that need one or two root capabilities don't have to have a full root privileges. For example, when running ``ping`` command, the executable receives the ``CAP_NET_RAW`` capability, which allows it to use raw network sockets without gaining any additional privileges.
Containers also have a restricted set of capabilities applied to them when they start.    


## Secure Computing (SecComp)   

Secure Computing is a features that limit system calls(syscalls) that a process can make. Since different seccomp profiles can be applied to different filters. This helps to decrease the number of system calls coming from containers, which could further reduce possible threats. you can use ``strace`` or ``ptrace`` to profile an application and get a list of syscalls. Creating a set of allowed syscalls for an application could be challenging, as the accuracy of this list will largely depends on the workload handled during list building. In other words, you have to run all the possible operations in application (container) while building this list.   


## Mandatory Access Control (MAC)   

SELinux and AppArmor are the two most common implementations of MAC. Both have policies for what a process can do on a Linux system but they have different implementation. SELinux is a labeling system, while AppArmor relies on file paths.    

**In SELinux**, everything(processes, files, directories ...etc) gets a label. There a set of policies, which defines how a process with a one label interacts with one with other label.    

**AppArmor** relies on files path to protect. and the policies, refers to an executables (application) and what it is allowed to do like certain capabilities or permissions.   

  