var dmesg_log = `[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.19.0-80-generic (buildd@lcy01-33) (gcc version 4.8.4 (Ubuntu 4.8.4-2ubuntu1~14.04.3) ) #88~14.04.1-Ubuntu SMP Fri Jan 13 14:54:07 UTC 2017 (Ubuntu 3.19.0-80.88~14.04.1-generic 3.19.8-ckt22)
[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-3.19.0-80-generic root=UUID=d9c156ab-1302-45de-868e-7771d4551f11 ro quiet splash nmi_watchdog=0 vt.handoff=7
[    0.000000] KERNEL supported cpus:
[    0.000000]   Intel GenuineIntel
[    0.000000]   AMD AuthenticAMD
[    0.000000]   Centaur CentaurHauls
[    0.000000] e820: BIOS-provided physical RAM map:
[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009d3ff] usable
[    0.000000] BIOS-e820: [mem 0x000000000009d400-0x000000000009ffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000000e0000-0x00000000000fffff] reserved
[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x0000000094d5ffff] usable
[    0.000000] BIOS-e820: [mem 0x0000000094d60000-0x0000000095d5ffff] reserved
[    0.000000] BIOS-e820: [mem 0x0000000095d60000-0x000000009aabefff] usable
[    0.000000] BIOS-e820: [mem 0x000000009aabf000-0x000000009aebefff] reserved
[    0.000000] BIOS-e820: [mem 0x000000009aebf000-0x000000009afbefff] ACPI NVS
[    0.000000] BIOS-e820: [mem 0x000000009afbf000-0x000000009affefff] ACPI data
[    0.000000] BIOS-e820: [mem 0x000000009afff000-0x000000009affffff] usable
[    0.000000] BIOS-e820: [mem 0x000000009b000000-0x000000009f9fffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000e0000000-0x00000000efffffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fe101000-0x00000000fe112fff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000feb00000-0x00000000feb0ffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fec00000-0x00000000fec00fff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fed00000-0x00000000fee00fff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000ffc00000-0x00000000ffffffff] reserved
[    0.000000] BIOS-e820: [mem 0x0000000100000000-0x000000025f5fffff] usable
[    0.000000] NX (Execute Disable) protection: active
[    0.000000] SMBIOS 2.7 present.
[    0.000000] DMI: Dell Inc. Inspiron 5547/0598GM, BIOS A08 07/13/2015
[    0.000000] e820: update [mem 0x00000000-0x00000fff] usable ==> reserved
[    0.000000] e820: remove [mem 0x000a0000-0x000fffff] usable
[    0.000000] AGP: No AGP bridge found
[    0.000000] e820: last_pfn = 0x25f600 max_arch_pfn = 0x400000000
[    0.000000] MTRR default type: uncachable
[    0.000000] MTRR fixed ranges enabled:
[    0.000000]   00000-9FFFF write-back
[    0.000000]   A0000-BFFFF uncachable
[    0.000000]   C0000-E7FFF write-protect
[    0.000000]   E8000-EFFFF write-combining
[    0.000000]   F0000-FFFFF write-protect
[    0.000000] MTRR variable ranges enabled:
[    0.000000]   0 base 0000000000 mask 7F80000000 write-back
[    0.000000]   1 base 0080000000 mask 7FE0000000 write-back
[    0.000000]   2 base 009B000000 mask 7FFF000000 uncachable
[    0.000000]   3 base 009C000000 mask 7FFC000000 uncachable
[    0.000000]   4 base 00FFC00000 mask 7FFFC00000 write-protect
[    0.000000]   5 base 0100000000 mask 7F00000000 write-back
[    0.000000]   6 base 0200000000 mask 7F80000000 write-back
[    0.000000]   7 base 025F600000 mask 7FFFE00000 uncachable
[    0.000000]   8 base 025F800000 mask 7FFF800000 uncachable
[    0.000000]   9 base 0260000000 mask 7FE0000000 uncachable
[    0.000000] PAT configuration [0-7]: WB  WC  UC- UC  WB  WC  UC- UC  
[    0.000000] e820: last_pfn = 0x9b000 max_arch_pfn = 0x400000000
[    0.000000] found SMP MP-table at [mem 0x000fe1b0-0x000fe1bf] mapped at [ffff8800000fe1b0]
[    0.000000] Scanning 1 areas for low memory corruption
[    0.000000] Base memory trampoline at [ffff880000097000] 97000 size 24576
[    0.000000] Using GB pages for direct mapping
[    0.000000] init_memory_mapping: [mem 0x00000000-0x000fffff]
[    0.000000]  [mem 0x00000000-0x000fffff] page 4k
[    0.000000] BRK [0x01fd5000, 0x01fd5fff] PGTABLE
[    0.000000] BRK [0x01fd6000, 0x01fd6fff] PGTABLE
[    0.000000] BRK [0x01fd7000, 0x01fd7fff] PGTABLE
[    0.000000] init_memory_mapping: [mem 0x25f400000-0x25f5fffff]
[    0.000000]  [mem 0x25f400000-0x25f5fffff] page 2M
[    0.000000] BRK [0x01fd8000, 0x01fd8fff] PGTABLE
[    0.000000] init_memory_mapping: [mem 0x240000000-0x25f3fffff]
[    0.000000]  [mem 0x240000000-0x25f3fffff] page 2M
[    0.000000] init_memory_mapping: [mem 0x220000000-0x23fffffff]
[    0.000000]  [mem 0x220000000-0x23fffffff] page 1G
[    0.000000] init_memory_mapping: [mem 0x00100000-0x94d5ffff]
[    0.000000]  [mem 0x00100000-0x001fffff] page 4k
[    0.000000]  [mem 0x00200000-0x3fffffff] page 2M
[    0.000000]  [mem 0x40000000-0x7fffffff] page 1G
[    0.000000]  [mem 0x80000000-0x94bfffff] page 2M
[    0.000000]  [mem 0x94c00000-0x94d5ffff] page 4k
[    0.000000] init_memory_mapping: [mem 0x95d60000-0x9aabefff]
[    0.000000]  [mem 0x95d60000-0x95dfffff] page 4k
[    0.000000]  [mem 0x95e00000-0x9a9fffff] page 2M
[    0.000000]  [mem 0x9aa00000-0x9aabefff] page 4k
[    0.000000] BRK [0x01fd9000, 0x01fd9fff] PGTABLE
[    0.000000] BRK [0x01fda000, 0x01fdafff] PGTABLE
[    0.000000] init_memory_mapping: [mem 0x9afff000-0x9affffff]
[    0.000000]  [mem 0x9afff000-0x9affffff] page 4k
[    0.000000] init_memory_mapping: [mem 0x100000000-0x21fffffff]
[    0.000000]  [mem 0x100000000-0x21fffffff] page 1G
[    0.000000] RAMDISK: [mem 0x3457c000-0x362b5fff]
[    0.000000] ACPI: Early table checksum verification disabled
[    0.000000] ACPI: RSDP 0x00000000000FE020 000024 (v02 DELL  )
[    0.000000] ACPI: XSDT 0x000000009AFFE210 0000AC (v01 DELL   CL09     00000001      01000013)
[    0.000000] ACPI: FACP 0x000000009AFF8000 00010C (v05 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: DSDT 0x000000009AFE6000 00E029 (v01 DELL   CL09     00000000 ASL  00040000)
[    0.000000] ACPI: FACS 0x000000009AFB8000 000040
[    0.000000] ACPI: SLIC 0x000000009AFFD000 000176 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: UEFI 0x000000009AFFC000 000236 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: FPDT 0x000000009AFFA000 000044 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: ASF! 0x000000009AFF9000 0000A5 (v32 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: HPET 0x000000009AFF7000 000038 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: APIC 0x000000009AFF6000 00008C (v03 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: MCFG 0x000000009AFF5000 00003C (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: SSDT 0x000000009AFE5000 0006FE (v01 COMPAL CRV ORB  00001000 ACPI 00040000)
[    0.000000] ACPI: BOOT 0x000000009AFE3000 000028 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: LPIT 0x000000009AFE2000 000094 (v01 DELL   CL09     00000000 ASL  00040000)
[    0.000000] ACPI: ASPT 0x000000009AFE0000 000034 (v07 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: DBGP 0x000000009AFDF000 000034 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: SSDT 0x000000009AFD9000 000539 (v01 COMPAL CRV ORB  00003000 ACPI 00040000)
[    0.000000] ACPI: SSDT 0x000000009AFD8000 000AD8 (v01 COMPAL CRV ORB  00003000 ACPI 00040000)
[    0.000000] ACPI: SSDT 0x000000009AFD4000 00355E (v01 COMPAL CRV ORB  00003000 ACPI 00040000)
[    0.000000] ACPI: CSRT 0x000000009AFD3000 0000C4 (v01 DELL   CL09     00000001 ASL  00040000)
[    0.000000] ACPI: Local APIC address 0xfee00000
[    0.000000] No NUMA configuration found
[    0.000000] Faking a node at [mem 0x0000000000000000-0x000000025f5fffff]
[    0.000000] NODE_DATA(0) allocated [mem 0x25f5f8000-0x25f5fcfff]
[    0.000000]  [ffffea0000000000-ffffea00097fffff] PMD -> [ffff880256c00000-ffff88025ebfffff] on node 0
[    0.000000] Zone ranges:
[    0.000000]   DMA      [mem 0x00001000-0x00ffffff]
[    0.000000]   DMA32    [mem 0x01000000-0xffffffff]
[    0.000000]   Normal   [mem 0x100000000-0x25f5fffff]
[    0.000000] Movable zone start for each node
[    0.000000] Early memory node ranges
[    0.000000]   node   0: [mem 0x00001000-0x0009cfff]
[    0.000000]   node   0: [mem 0x00100000-0x94d5ffff]
[    0.000000]   node   0: [mem 0x95d60000-0x9aabefff]
[    0.000000]   node   0: [mem 0x9afff000-0x9affffff]
[    0.000000]   node   0: [mem 0x100000000-0x25f5fffff]
[    0.000000] Initmem setup node 0 [mem 0x00001000-0x25f5fffff]
[    0.000000] On node 0 totalpages: 2068572
[    0.000000]   DMA zone: 64 pages used for memmap
[    0.000000]   DMA zone: 21 pages reserved
[    0.000000]   DMA zone: 3996 pages, LIFO batch:0
[    0.000000]   DMA32 zone: 9771 pages used for memmap
[    0.000000]   DMA32 zone: 625344 pages, LIFO batch:31
[    0.000000]   Normal zone: 22488 pages used for memmap
[    0.000000]   Normal zone: 1439232 pages, LIFO batch:31
[    0.000000] Reserving Intel graphics stolen memory at 0x9ba00000-0x9f9fffff
[    0.000000] ACPI: PM-Timer IO Port: 0x1808
[    0.000000] ACPI: Local APIC address 0xfee00000
[    0.000000] ACPI: LAPIC (acpi_id[0x01] lapic_id[0x00] enabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x02] lapic_id[0x01] enabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x03] lapic_id[0x02] enabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x04] lapic_id[0x03] enabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x05] lapic_id[0x00] disabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x06] lapic_id[0x00] disabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x07] lapic_id[0x00] disabled)
[    0.000000] ACPI: LAPIC (acpi_id[0x08] lapic_id[0x00] disabled)
[    0.000000] ACPI: IOAPIC (id[0x02] address[0xfec00000] gsi_base[0])
[    0.000000] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-39
[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)
[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)
[    0.000000] ACPI: IRQ0 used by override.
[    0.000000] ACPI: IRQ9 used by override.
[    0.000000] Using ACPI (MADT) for SMP configuration information
[    0.000000] ACPI: HPET id: 0x8086a201 base: 0xfed00000
[    0.000000] smpboot: Allowing 8 CPUs, 4 hotplug CPUs
[    0.000000] PM: Registered nosave memory: [mem 0x00000000-0x00000fff]
[    0.000000] PM: Registered nosave memory: [mem 0x0009d000-0x0009dfff]
[    0.000000] PM: Registered nosave memory: [mem 0x0009e000-0x0009ffff]
[    0.000000] PM: Registered nosave memory: [mem 0x000a0000-0x000dffff]
[    0.000000] PM: Registered nosave memory: [mem 0x000e0000-0x000fffff]
[    0.000000] PM: Registered nosave memory: [mem 0x94d60000-0x95d5ffff]
[    0.000000] PM: Registered nosave memory: [mem 0x9aabf000-0x9aebefff]
[    0.000000] PM: Registered nosave memory: [mem 0x9aebf000-0x9afbefff]
[    0.000000] PM: Registered nosave memory: [mem 0x9afbf000-0x9affefff]
[    0.000000] PM: Registered nosave memory: [mem 0x9b000000-0x9f9fffff]
[    0.000000] PM: Registered nosave memory: [mem 0x9fa00000-0xdfffffff]
[    0.000000] PM: Registered nosave memory: [mem 0xe0000000-0xefffffff]
[    0.000000] PM: Registered nosave memory: [mem 0xf0000000-0xfe100fff]
[    0.000000] PM: Registered nosave memory: [mem 0xfe101000-0xfe112fff]
[    0.000000] PM: Registered nosave memory: [mem 0xfe113000-0xfeafffff]
[    0.000000] PM: Registered nosave memory: [mem 0xfeb00000-0xfeb0ffff]
[    0.000000] PM: Registered nosave memory: [mem 0xfeb10000-0xfebfffff]
[    0.000000] PM: Registered nosave memory: [mem 0xfec00000-0xfec00fff]
[    0.000000] PM: Registered nosave memory: [mem 0xfec01000-0xfecfffff]
[    0.000000] PM: Registered nosave memory: [mem 0xfed00000-0xfee00fff]
[    0.000000] PM: Registered nosave memory: [mem 0xfee01000-0xffbfffff]
[    0.000000] PM: Registered nosave memory: [mem 0xffc00000-0xffffffff]
[    0.000000] e820: [mem 0x9fa00000-0xdfffffff] available for PCI devices
[    0.000000] Booting paravirtualized kernel on bare hardware
[    0.000000] setup_percpu: NR_CPUS:256 nr_cpumask_bits:256 nr_cpu_ids:8 nr_node_ids:1
[    0.000000] PERCPU: Embedded 31 pages/cpu @ffff88025f200000 s86144 r8192 d32640 u262144
[    0.000000] pcpu-alloc: s86144 r8192 d32640 u262144 alloc=1*2097152
[    0.000000] pcpu-alloc: [0] 0 1 2 3 4 5 6 7 
[    0.000000] Built 1 zonelists in Node order, mobility grouping on.  Total pages: 2036228
[    0.000000] Policy zone: Normal
[    0.000000] Kernel command line: BOOT_IMAGE=/boot/vmlinuz-3.19.0-80-generic root=UUID=d9c156ab-1302-45de-868e-7771d4551f11 ro quiet splash nmi_watchdog=0 vt.handoff=7
[    0.000000] PID hash table entries: 4096 (order: 3, 32768 bytes)
[    0.000000] xsave: enabled xstate_bv 0x7, cntxt size 0x340 using standard form
[    0.000000] AGP: Checking aperture...
[    0.000000] AGP: No AGP bridge found
[    0.000000] Calgary: detecting Calgary via BIOS EBDA area
[    0.000000] Calgary: Unable to locate Rio Grande table in EBDA - bailing!
[    0.000000] Memory: 8029640K/8274288K available (7948K kernel code, 1175K rwdata, 3760K rodata, 1412K init, 1292K bss, 244648K reserved, 0K cma-reserved)
[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1
[    0.000000] Hierarchical RCU implementation.
[    0.000000] 	RCU dyntick-idle grace-period acceleration is enabled.
[    0.000000] 	RCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=8.
[    0.000000] RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=8
[    0.000000] NR_IRQS:16640 nr_irqs:760 16
[    0.000000] 	Offload RCU callbacks from all CPUs
[    0.000000] 	Offload RCU callbacks from CPUs: 0-7.
[    0.000000] vt handoff: transparent VT on vt#7
[    0.000000] Console: colour VGA+ 80x25
[    0.000000] console [tty0] enabled
[    0.000000] hpet clockevent registered
[    0.000000] tsc: Fast TSC calibration using PIT
[    0.000000] tsc: Detected 2394.330 MHz processor
[    0.000041] Calibrating delay loop (skipped), value calculated using timer frequency.. 4788.66 BogoMIPS (lpj=9577320)
[    0.000044] pid_max: default: 32768 minimum: 301
[    0.000051] ACPI: Core revision 20141107
[    0.017928] ACPI: All ACPI Tables successfully acquired
[    0.017956] Security Framework initialized
[    0.017975] AppArmor: AppArmor initialized
[    0.017977] Yama: becoming mindful.
[    0.018710] Dentry cache hash table entries: 1048576 (order: 11, 8388608 bytes)
[    0.020893] Inode-cache hash table entries: 524288 (order: 10, 4194304 bytes)
[    0.021829] Mount-cache hash table entries: 16384 (order: 5, 131072 bytes)
[    0.021843] Mountpoint-cache hash table entries: 16384 (order: 5, 131072 bytes)
[    0.022104] Initializing cgroup subsys memory
[    0.022111] Initializing cgroup subsys devices
[    0.022113] Initializing cgroup subsys freezer
[    0.022116] Initializing cgroup subsys net_cls
[    0.022118] Initializing cgroup subsys blkio
[    0.022121] Initializing cgroup subsys perf_event
[    0.022123] Initializing cgroup subsys net_prio
[    0.022126] Initializing cgroup subsys hugetlb
[    0.022156] CPU: Physical Processor ID: 0
[    0.022157] CPU: Processor Core ID: 0
[    0.022162] ENERGY_PERF_BIAS: Set to 'normal', was 'performance'
[    0.022162] ENERGY_PERF_BIAS: View and update with x86_energy_perf_policy(8)
[    0.023389] mce: CPU supports 7 MCE banks
[    0.023406] CPU0: Thermal monitoring enabled (TM1)
[    0.023416] process: using mwait in idle threads
[    0.023421] Last level iTLB entries: 4KB 1024, 2MB 1024, 4MB 1024
[    0.023421] Last level dTLB entries: 4KB 1024, 2MB 1024, 4MB 1024, 1GB 4
[    0.023572] Freeing SMP alternatives memory: 32K (ffffffff81e88000 - ffffffff81e90000)
[    0.027284] ftrace: allocating 30063 entries in 118 pages
[    0.044752] ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1
[    0.084469] smpboot: CPU0: Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz (fam: 06, model: 45, stepping: 01)
[    0.084477] TSC deadline timer enabled
[    0.084509] Performance Events: PEBS fmt2+, 16-deep LBR, Haswell events, full-width counters, Intel PMU driver.
[    0.084536] ... version:                3
[    0.084537] ... bit width:              48
[    0.084538] ... generic registers:      4
[    0.084539] ... value mask:             0000ffffffffffff
[    0.084541] ... max period:             0000ffffffffffff
[    0.084542] ... fixed-purpose events:   3
[    0.084543] ... event mask:             000000070000000f
[    0.085707] x86: Booting SMP configuration:
[    0.085709] .... node  #0, CPUs:      #1 #2 #3
[    0.129158] x86: Booted up 1 node, 4 CPUs
[    0.129162] smpboot: Total of 4 processors activated (19154.64 BogoMIPS)
[    0.134060] devtmpfs: initialized
[    0.137468] evm: security.selinux
[    0.137470] evm: security.SMACK64
[    0.137471] evm: security.SMACK64EXEC
[    0.137472] evm: security.SMACK64TRANSMUTE
[    0.137473] evm: security.SMACK64MMAP
[    0.137474] evm: security.ima
[    0.137476] evm: security.capability
[    0.137547] PM: Registering ACPI NVS region [mem 0x9aebf000-0x9afbefff] (1048576 bytes)
[    0.137765] pinctrl core: initialized pinctrl subsystem
[    0.137900] RTC time: 18:49:28, date: 01/11/19
[    0.138041] NET: Registered protocol family 16
[    0.141867] cpuidle: using governor ladder
[    0.145882] cpuidle: using governor menu
[    0.145956] ACPI FADT declares the system doesn't support PCIe ASPM, so disable it
[    0.145958] ACPI: bus type PCI registered
[    0.145960] acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5
[    0.146055] PCI: MMCONFIG for domain 0000 [bus 00-ff] at [mem 0xe0000000-0xefffffff] (base 0xe0000000)
[    0.146058] PCI: MMCONFIG at [mem 0xe0000000-0xefffffff] reserved in E820
[    0.146480] PCI: Using configuration type 1 for base access
[    0.146488] dmi type 0xB1 record - unknown flag
[    0.150379] ACPI: Added _OSI(Module Device)
[    0.150382] ACPI: Added _OSI(Processor Device)
[    0.150384] ACPI: Added _OSI(3.0 _SCP Extensions)
[    0.150385] ACPI: Added _OSI(Processor Aggregator Device)
[    0.155740] ACPI: Executed 1 blocks of module-level executable AML code
[    0.159801] [Firmware Bug]: ACPI: BIOS _OSI(Linux) query ignored
[    0.160740] ACPI: Dynamic OEM Table Load:
[    0.160752] ACPI: SSDT 0xFFFF8802554E9C00 0003D3 (v01 PmRef  Cpu0Cst  00003001 INTL 20130117)
[    0.161722] ACPI: Dynamic OEM Table Load:
[    0.161733] ACPI: SSDT 0xFFFF88025542B000 0005AA (v01 PmRef  ApIst    00003000 INTL 20130117)
[    0.162771] ACPI: Dynamic OEM Table Load:
[    0.162780] ACPI: SSDT 0xFFFF880255433E00 000119 (v01 PmRef  ApCst    00003000 INTL 20130117)
[    0.306099] ACPI: Interpreter enabled
[    0.306111] ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [\_S1_] (20141107/hwxface-580)
[    0.306119] ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [\_S2_] (20141107/hwxface-580)
[    0.306142] ACPI: (supports S0 S3 S4 S5)
[    0.306144] ACPI: Using IOAPIC for interrupt routing
[    0.306180] PCI: Using host bridge windows from ACPI; if necessary, use "pci=nocrs" and report a bug
[    0.460323] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-fe])
[    0.460330] acpi PNP0A08:00: _OSC: OS supports [ExtendedConfig ASPM ClockPM Segments MSI]
[    0.460904] acpi PNP0A08:00: _OSC: OS now controls [PCIeHotplug PME AER PCIeCapability]
[    0.460906] acpi PNP0A08:00: FADT indicates ASPM is unsupported, using BIOS configuration
[    0.461793] PCI host bridge to bus 0000:00
[    0.461797] pci_bus 0000:00: root bus resource [bus 00-fe]
[    0.461799] pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7]
[    0.461801] pci_bus 0000:00: root bus resource [io  0x0d00-0xffff]
[    0.461803] pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff]
[    0.461805] pci_bus 0000:00: root bus resource [mem 0x9fa00000-0xfeafffff]
[    0.461815] pci 0000:00:00.0: [8086:0a04] type 00 class 0x060000
[    0.461987] pci 0000:00:02.0: [8086:0a16] type 00 class 0x030000
[    0.462002] pci 0000:00:02.0: reg 0x10: [mem 0xb0000000-0xb03fffff 64bit]
[    0.462011] pci 0000:00:02.0: reg 0x18: [mem 0xa0000000-0xafffffff 64bit pref]
[    0.462017] pci 0000:00:02.0: reg 0x20: [io  0x4000-0x403f]
[    0.462184] pci 0000:00:03.0: [8086:0a0c] type 00 class 0x040300
[    0.462195] pci 0000:00:03.0: reg 0x10: [mem 0xb0710000-0xb0713fff 64bit]
[    0.462396] pci 0000:00:14.0: [8086:9c31] type 00 class 0x0c0330
[    0.462417] pci 0000:00:14.0: reg 0x10: [mem 0xb0700000-0xb070ffff 64bit]
[    0.462485] pci 0000:00:14.0: PME# supported from D3hot D3cold
[    0.462606] pci 0000:00:14.0: System wakeup disabled by ACPI
[    0.462654] pci 0000:00:16.0: [8086:9c3a] type 00 class 0x078000
[    0.462677] pci 0000:00:16.0: reg 0x10: [mem 0xb0718000-0xb071801f 64bit]
[    0.462755] pci 0000:00:16.0: PME# supported from D0 D3hot D3cold
[    0.462913] pci 0000:00:1b.0: [8086:9c20] type 00 class 0x040300
[    0.462930] pci 0000:00:1b.0: reg 0x10: [mem 0xb0714000-0xb0717fff 64bit]
[    0.463006] pci 0000:00:1b.0: PME# supported from D0 D3hot D3cold
[    0.463151] pci 0000:00:1c.0: [8086:9c14] type 01 class 0x060400
[    0.463229] pci 0000:00:1c.0: PME# supported from D0 D3hot D3cold
[    0.463370] pci 0000:00:1c.0: System wakeup disabled by ACPI
[    0.463414] pci 0000:00:1c.3: [8086:9c16] type 01 class 0x060400
[    0.463491] pci 0000:00:1c.3: PME# supported from D0 D3hot D3cold
[    0.463648] pci 0000:00:1d.0: [8086:9c26] type 00 class 0x0c0320
[    0.464611] pci 0000:00:1d.0: reg 0x10: [mem 0xb071c000-0xb071c3ff]
[    0.470290] pci 0000:00:1d.0: PME# supported from D0 D3hot D3cold
[    0.470417] pci 0000:00:1d.0: System wakeup disabled by ACPI
[    0.470466] pci 0000:00:1f.0: [8086:9c43] type 00 class 0x060100
[    0.470731] pci 0000:00:1f.2: [8086:9c03] type 00 class 0x010601
[    0.470748] pci 0000:00:1f.2: reg 0x10: [io  0x4088-0x408f]
[    0.470756] pci 0000:00:1f.2: reg 0x14: [io  0x4094-0x4097]
[    0.470764] pci 0000:00:1f.2: reg 0x18: [io  0x4080-0x4087]
[    0.470772] pci 0000:00:1f.2: reg 0x1c: [io  0x4090-0x4093]
[    0.470780] pci 0000:00:1f.2: reg 0x20: [io  0x4060-0x407f]
[    0.470788] pci 0000:00:1f.2: reg 0x24: [mem 0xb071b000-0xb071b7ff]
[    0.470832] pci 0000:00:1f.2: PME# supported from D3hot
[    0.470972] pci 0000:00:1f.3: [8086:9c22] type 00 class 0x0c0500
[    0.470987] pci 0000:00:1f.3: reg 0x10: [mem 0xb0719000-0xb07190ff 64bit]
[    0.471009] pci 0000:00:1f.3: reg 0x20: [io  0x4040-0x405f]
[    0.471257] pci 0000:01:00.0: [10ec:8136] type 00 class 0x020000
[    0.471287] pci 0000:01:00.0: reg 0x10: [io  0x3000-0x30ff]
[    0.471321] pci 0000:01:00.0: reg 0x18: [mem 0xb0600000-0xb0600fff 64bit]
[    0.471345] pci 0000:01:00.0: reg 0x20: [mem 0xb0400000-0xb0403fff 64bit pref]
[    0.471454] pci 0000:01:00.0: supports D1 D2
[    0.471456] pci 0000:01:00.0: PME# supported from D0 D1 D2 D3hot D3cold
[    0.478551] pci 0000:00:1c.0: PCI bridge to [bus 01]
[    0.478555] pci 0000:00:1c.0:   bridge window [io  0x3000-0x3fff]
[    0.478559] pci 0000:00:1c.0:   bridge window [mem 0xb0600000-0xb06fffff]
[    0.478565] pci 0000:00:1c.0:   bridge window [mem 0xb0400000-0xb04fffff 64bit pref]
[    0.478669] pci 0000:02:00.0: [8086:08b3] type 00 class 0x028000
[    0.478718] pci 0000:02:00.0: reg 0x10: [mem 0xb0500000-0xb0501fff 64bit]
[    0.478933] pci 0000:02:00.0: PME# supported from D0 D3hot D3cold
[    0.486561] pci 0000:00:1c.3: PCI bridge to [bus 02]
[    0.486567] pci 0000:00:1c.3:   bridge window [mem 0xb0500000-0xb05fffff]
[    0.559745] ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 5 6 10 *11 12 14 15)
[    0.559801] ACPI: PCI Interrupt Link [LNKB] (IRQs 3 4 5 6 10 11 12 14 15) *0, disabled.
[    0.559856] ACPI: PCI Interrupt Link [LNKC] (IRQs 3 4 5 6 10 *11 12 14 15)
[    0.559908] ACPI: PCI Interrupt Link [LNKD] (IRQs 3 4 5 6 *10 11 12 14 15)
[    0.559960] ACPI: PCI Interrupt Link [LNKE] (IRQs 3 4 5 6 10 11 12 14 15) *0, disabled.
[    0.560012] ACPI: PCI Interrupt Link [LNKF] (IRQs 3 4 5 6 10 11 12 14 15) *0, disabled.
[    0.560066] ACPI: PCI Interrupt Link [LNKG] (IRQs 3 4 5 6 *10 11 12 14 15)
[    0.560120] ACPI: PCI Interrupt Link [LNKH] (IRQs 3 4 5 6 10 *11 12 14 15)
[    0.560404] ACPI: Enabled 5 GPEs in block 00 to 7F
[    0.560449] ACPI : EC: GPE = 0xa, I/O: command/status = 0x66, data = 0x62
[    0.560574] vgaarb: setting as boot device: PCI:0000:00:02.0
[    0.560576] vgaarb: device added: PCI:0000:00:02.0,decodes=io+mem,owns=io+mem,locks=none
[    0.560579] vgaarb: loaded
[    0.560581] vgaarb: bridge control possible 0000:00:02.0
[    0.560846] SCSI subsystem initialized
[    0.560899] libata version 3.00 loaded.
[    0.560928] ACPI: bus type USB registered
[    0.560950] usbcore: registered new interface driver usbfs
[    0.560960] usbcore: registered new interface driver hub
[    0.560983] usbcore: registered new device driver usb
[    0.561151] PCI: Using ACPI for IRQ routing
[    0.567369] PCI: pci_cache_line_size set to 64 bytes
[    0.567436] e820: reserve RAM buffer [mem 0x0009d400-0x0009ffff]
[    0.567439] e820: reserve RAM buffer [mem 0x94d60000-0x97ffffff]
[    0.567440] e820: reserve RAM buffer [mem 0x9aabf000-0x9bffffff]
[    0.567442] e820: reserve RAM buffer [mem 0x9b000000-0x9bffffff]
[    0.567444] e820: reserve RAM buffer [mem 0x25f600000-0x25fffffff]
[    0.567585] NetLabel: Initializing
[    0.567586] NetLabel:  domain hash size = 128
[    0.567587] NetLabel:  protocols = UNLABELED CIPSOv4
[    0.567601] NetLabel:  unlabeled traffic allowed by default
[    0.567686] hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0, 0, 0, 0, 0, 0
[    0.567693] hpet0: 8 comparators, 64-bit 14.318180 MHz counter
[    0.569735] Switched to clocksource hpet
[    0.576532] AppArmor: AppArmor Filesystem Enabled
[    0.576614] pnp: PnP ACPI init
[    0.576760] system 00:00: [io  0x0680-0x069f] has been reserved
[    0.576763] system 00:00: [io  0xfd60-0xfd63] has been reserved
[    0.576766] system 00:00: [io  0xffff] has been reserved
[    0.576768] system 00:00: [io  0xffff] has been reserved
[    0.576770] system 00:00: [io  0xffff] has been reserved
[    0.576772] system 00:00: [io  0x1800-0x18fe] could not be reserved
[    0.576774] system 00:00: [io  0x164e-0x164f] has been reserved
[    0.576779] system 00:00: Plug and Play ACPI device, IDs PNP0c02 (active)
[    0.576837] pnp 00:01: Plug and Play ACPI device, IDs PNP0b00 (active)
[    0.576892] system 00:02: [io  0x1854-0x1857] has been reserved
[    0.576895] system 00:02: Plug and Play ACPI device, IDs INT3f0d PNP0c02 (active)
[    0.576942] pnp 00:03: Plug and Play ACPI device, IDs PNP0303 (active)
[    0.576974] pnp 00:04: Plug and Play ACPI device, IDs DLL063f PNP0f13 (active)
[    0.645976] system 00:05: [mem 0xfed1c000-0xfed1ffff] has been reserved
[    0.645978] system 00:05: [mem 0xfed10000-0xfed17fff] has been reserved
[    0.645981] system 00:05: [mem 0xfed18000-0xfed18fff] has been reserved
[    0.645983] system 00:05: [mem 0xfed19000-0xfed19fff] has been reserved
[    0.645985] system 00:05: [mem 0xe0000000-0xefffffff] has been reserved
[    0.645988] system 00:05: [mem 0xfed20000-0xfed3ffff] has been reserved
[    0.645990] system 00:05: [mem 0xfed90000-0xfed93fff] has been reserved
[    0.645992] system 00:05: [mem 0xff000000-0xff000fff] has been reserved
[    0.645994] system 00:05: [mem 0xff010000-0xffffffff] could not be reserved
[    0.645997] system 00:05: [mem 0xfee00000-0xfeefffff] could not be reserved
[    0.645999] system 00:05: [mem 0x9fa21000-0x9fa21fff] has been reserved
[    0.646001] system 00:05: [mem 0x9fa10000-0x9fa1ffff] has been reserved
[    0.646004] system 00:05: Plug and Play ACPI device, IDs PNP0c02 (active)
[    0.646328] system 00:06: [mem 0xb071f000-0xb071ffff] has been reserved
[    0.646330] system 00:06: [mem 0xb071d000-0xb071dfff] has been reserved
[    0.646333] system 00:06: Plug and Play ACPI device, IDs PNP0c02 (active)
[    0.647012] pnp: PnP ACPI: found 7 devices
[    0.653460] pci 0000:00:1c.0: PCI bridge to [bus 01]
[    0.653464] pci 0000:00:1c.0:   bridge window [io  0x3000-0x3fff]
[    0.653470] pci 0000:00:1c.0:   bridge window [mem 0xb0600000-0xb06fffff]
[    0.653474] pci 0000:00:1c.0:   bridge window [mem 0xb0400000-0xb04fffff 64bit pref]
[    0.653480] pci 0000:00:1c.3: PCI bridge to [bus 02]
[    0.653485] pci 0000:00:1c.3:   bridge window [mem 0xb0500000-0xb05fffff]
[    0.653494] pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7]
[    0.653496] pci_bus 0000:00: resource 5 [io  0x0d00-0xffff]
[    0.653498] pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff]
[    0.653500] pci_bus 0000:00: resource 7 [mem 0x9fa00000-0xfeafffff]
[    0.653502] pci_bus 0000:01: resource 0 [io  0x3000-0x3fff]
[    0.653504] pci_bus 0000:01: resource 1 [mem 0xb0600000-0xb06fffff]
[    0.653506] pci_bus 0000:01: resource 2 [mem 0xb0400000-0xb04fffff 64bit pref]
[    0.653508] pci_bus 0000:02: resource 1 [mem 0xb0500000-0xb05fffff]
[    0.653545] NET: Registered protocol family 2
[    0.653771] TCP established hash table entries: 65536 (order: 7, 524288 bytes)
[    0.653960] TCP bind hash table entries: 65536 (order: 8, 1048576 bytes)
[    0.654104] TCP: Hash tables configured (established 65536 bind 65536)
[    0.654124] TCP: reno registered
[    0.654138] UDP hash table entries: 4096 (order: 5, 131072 bytes)
[    0.654171] UDP-Lite hash table entries: 4096 (order: 5, 131072 bytes)
[    0.654247] NET: Registered protocol family 1
[    0.654268] pci 0000:00:02.0: Video device with shadowed ROM
[    0.669957] PCI: CLS 64 bytes, default 64
[    0.670016] Trying to unpack rootfs image as initramfs...
[    1.319500] Freeing initrd memory: 29928K (ffff88003457c000 - ffff8800362b6000)
[    1.319523] PCI-DMA: Using software bounce buffering for IO (SWIOTLB)
[    1.319527] software IO TLB [mem 0x96abf000-0x9aabf000] (64MB) mapped at [ffff880096abf000-ffff88009aabefff]
[    1.319575] Simple Boot Flag at 0x44 set to 0x1
[    1.319761] RAPL PMU detected, hw unit 2^-14 Joules, API unit is 2^-32 Joules, 4 fixed counters 655360 ms ovfl timer
[    1.319822] microcode: CPU0 sig=0x40651, pf=0x40, revision=0x1c
[    1.319830] microcode: CPU1 sig=0x40651, pf=0x40, revision=0x1c
[    1.319840] microcode: CPU2 sig=0x40651, pf=0x40, revision=0x1c
[    1.319849] microcode: CPU3 sig=0x40651, pf=0x40, revision=0x1c
[    1.319909] microcode: Microcode Update Driver: v2.00 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
[    1.319941] Scanning for low memory corruption every 60 seconds
[    1.320352] futex hash table entries: 2048 (order: 5, 131072 bytes)
[    1.320377] Initialise system trusted keyring
[    1.320401] audit: initializing netlink subsys (disabled)
[    1.320415] audit: type=2000 audit(1547232569.312:1): initialized
[    1.320860] HugeTLB registered 2 MB page size, pre-allocated 0 pages
[    1.322763] zpool: loaded
[    1.322766] zbud: loaded
[    1.322971] VFS: Disk quotas dquot_6.5.2
[    1.323015] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
[    1.323555] fuse init (API version 7.23)
[    1.323718] Key type big_key registered
[    1.324087] Key type asymmetric registered
[    1.324091] Asymmetric key parser 'x509' registered
[    1.324138] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)
[    1.324176] io scheduler noop registered
[    1.324180] io scheduler deadline registered (default)
[    1.324220] io scheduler cfq registered
[    1.324715] pcieport 0000:00:1c.0: Signaling PME through PCIe PME interrupt
[    1.324718] pci 0000:01:00.0: Signaling PME through PCIe PME interrupt
[    1.324722] pcie_pme 0000:00:1c.0:pcie01: service driver pcie_pme loaded
[    1.324739] pcieport 0000:00:1c.3: Signaling PME through PCIe PME interrupt
[    1.324741] pci 0000:02:00.0: Signaling PME through PCIe PME interrupt
[    1.324744] pcie_pme 0000:00:1c.3:pcie01: service driver pcie_pme loaded
[    1.324754] pci_hotplug: PCI Hot Plug PCI Core version: 0.5
[    1.324774] pciehp: PCI Express Hot Plug Controller Driver version: 0.4
[    1.324815] intel_idle: MWAIT substates: 0x11142120
[    1.324816] intel_idle: v0.4 model 0x45
[    1.324818] intel_idle: lapic_timer_reliable_states 0xffffffff
[    1.325171] ACPI: AC Adapter [ACAD] (on-line)
[    1.325291] input: Lid Switch as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:01/PNP0C0D:00/input/input0
[    1.325317] ACPI: Lid Switch [LID0]
[    1.325361] input: Power Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:01/PNP0C0C:00/input/input1
[    1.325364] ACPI: Power Button [PWRB]
[    1.325408] input: Sleep Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:01/PNP0C0E:00/input/input2
[    1.325410] ACPI: Sleep Button [SLPB]
[    1.325463] input: Power Button as /devices/LNXSYSTM:00/LNXPWRBN:00/input/input3
[    1.325465] ACPI: Power Button [PWRF]
[    1.325808] GHES: HEST is not enabled!
[    1.325935] Serial: 8250/16550 driver, 32 ports, IRQ sharing enabled
[    1.562682] ACPI: Battery Slot [BAT1] (battery present)
[    1.562903] Linux agpgart interface v0.103
[    1.564451] brd: module loaded
[    1.565145] loop: module loaded
[    1.565388] libphy: Fixed MDIO Bus: probed
[    1.565392] tun: Universal TUN/TAP device driver, 1.6
[    1.565394] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    1.565447] PPP generic driver version 2.4.2
[    1.565522] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
[    1.565528] ehci-pci: EHCI PCI platform driver
[    1.565669] ehci-pci 0000:00:1d.0: EHCI Host Controller
[    1.565676] ehci-pci 0000:00:1d.0: new USB bus registered, assigned bus number 1
[    1.565690] ehci-pci 0000:00:1d.0: debug port 2
[    1.569601] ehci-pci 0000:00:1d.0: cache line size of 64 is not supported
[    1.569620] ehci-pci 0000:00:1d.0: irq 23, io mem 0xb071c000
[    1.578560] ehci-pci 0000:00:1d.0: USB 2.0 started, EHCI 1.00
[    1.578606] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
[    1.578608] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.578610] usb usb1: Product: EHCI Host Controller
[    1.578612] usb usb1: Manufacturer: Linux 3.19.0-80-generic ehci_hcd
[    1.578613] usb usb1: SerialNumber: 0000:00:1d.0
[    1.578748] hub 1-0:1.0: USB hub found
[    1.578755] hub 1-0:1.0: 2 ports detected
[    1.578893] ehci-platform: EHCI generic platform driver
[    1.578906] ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver
[    1.578913] ohci-pci: OHCI PCI platform driver
[    1.578926] ohci-platform: OHCI generic platform driver
[    1.578937] uhci_hcd: USB Universal Host Controller Interface driver
[    1.579084] xhci_hcd 0000:00:14.0: xHCI Host Controller
[    1.579091] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 2
[    1.580159] xhci_hcd 0000:00:14.0: cache line size of 64 is not supported
[    1.580233] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
[    1.580235] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.580236] usb usb2: Product: xHCI Host Controller
[    1.580238] usb usb2: Manufacturer: Linux 3.19.0-80-generic xhci-hcd
[    1.580240] usb usb2: SerialNumber: 0000:00:14.0
[    1.580366] hub 2-0:1.0: USB hub found
[    1.580377] hub 2-0:1.0: 9 ports detected
[    1.582853] xhci_hcd 0000:00:14.0: xHCI Host Controller
[    1.582858] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 3
[    1.582893] usb usb3: New USB device found, idVendor=1d6b, idProduct=0003
[    1.582895] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.582897] usb usb3: Product: xHCI Host Controller
[    1.582899] usb usb3: Manufacturer: Linux 3.19.0-80-generic xhci-hcd
[    1.582900] usb usb3: SerialNumber: 0000:00:14.0
[    1.583026] hub 3-0:1.0: USB hub found
[    1.583035] hub 3-0:1.0: 4 ports detected
[    1.583925] i8042: PNP: PS/2 Controller [PNP0303:PS2K,PNP0f13:PS2M] at 0x60,0x64 irq 1,12
[    1.615769] serio: i8042 KBD port at 0x60,0x64 irq 1
[    1.615775] serio: i8042 AUX port at 0x60,0x64 irq 12
[    1.615916] mousedev: PS/2 mouse device common for all mice
[    1.617799] rtc_cmos 00:01: RTC can wake from S4
[    1.617936] rtc_cmos 00:01: rtc core: registered rtc_cmos as rtc0
[    1.617964] rtc_cmos 00:01: alarms up to one month, 242 bytes nvram, hpet irqs
[    1.617975] i2c /dev entries driver
[    1.618054] device-mapper: uevent: version 1.0.3
[    1.618134] device-mapper: ioctl: 4.29.0-ioctl (2014-10-28) initialised: dm-devel@redhat.com
[    1.618164] Intel P-state driver initializing.
[    1.618292] Consider also installing thermald for improved thermal control.
[    1.618301] ledtrig-cpu: registered to indicate activity on CPUs
[    1.618441] PCCT header not found.
[    1.618538] TCP: cubic registered
[    1.618642] NET: Registered protocol family 10
[    1.618844] NET: Registered protocol family 17
[    1.618856] Key type dns_resolver registered
[    1.619169] Loading compiled-in X.509 certificates
[    1.619925] Loaded X.509 cert 'Magrathea: Glacier signing key: a0fe5d15c793911f01ec455d4a8b3d59ba2e0e88'
[    1.619936] registered taskstats version 1
[    1.621952] Key type trusted registered
[    1.625269] Key type encrypted registered
[    1.625275] AppArmor: AppArmor sha1 policy hashing enabled
[    1.625279] ima: No TPM chip found, activating TPM-bypass!
[    1.625297] evm: HMAC attrs: 0x1
[    1.625658]   Magic number: 3:492:847
[    1.625784] rtc_cmos 00:01: setting system clock to 2019-01-11 18:49:29 UTC (1547232569)
[    1.625856] BIOS EDD facility v0.16 2004-Jun-25, 0 devices found
[    1.625858] EDD information not available.
[    1.625933] PM: Hibernation image not present or could not be loaded.
[    1.626181] Freeing unused kernel memory: 1412K (ffffffff81d27000 - ffffffff81e88000)
[    1.626183] Write protecting the kernel read-only data: 12288k
[    1.626344] Freeing unused kernel memory: 232K (ffff8800017c6000 - ffff880001800000)
[    1.626425] Freeing unused kernel memory: 336K (ffff880001bac000 - ffff880001c00000)
[    1.639878] systemd-udevd[118]: starting version 204
[    1.651259] sdhci: Secure Digital Host Controller Interface driver
[    1.651263] sdhci: Copyright(c) Pierre Ossman
[    1.655007] input: AT Translated Set 2 keyboard as /devices/platform/i8042/serio0/input/input4
[    1.660935] wmi: Mapper loaded
[    1.663455] ahci 0000:00:1f.2: version 3.0
[    1.666987] [drm] Initialized drm 1.1.0 20060810
[    1.675412] r8169 Gigabit Ethernet driver 2.3LK-NAPI loaded
[    1.675424] r8169 0000:01:00.0: can't disable ASPM; OS doesn't have ASPM control
[    1.678655] ahci 0000:00:1f.2: AHCI 0001.0300 32 slots 3 ports 6 Gbps 0x1 impl SATA mode
[    1.678661] ahci 0000:00:1f.2: flags: 64bit ncq led clo only pio slum part deso sadm sds apst 
[    1.678961] r8169 0000:01:00.0 eth0: RTL8106e at 0xffffc90010c9c000, 34:17:eb:5f:98:94, XID 04900000 IRQ 44
[    1.678978] scsi host0: ahci
[    1.679082] scsi host1: ahci
[    1.679152] scsi host2: ahci
[    1.679191] ata1: SATA max UDMA/133 abar m2048@0xb071b000 port 0xb071b100 irq 43
[    1.679192] ata2: DUMMY
[    1.679193] ata3: DUMMY
[    1.691271] [drm] Memory usable by graphics device = 2048M
[    1.691275] [drm] Replacing VGA console driver
[    1.692416] Console: switching to colour dummy device 80x25
[    1.714801] [drm] Supports vblank timestamp caching Rev 2 (21.10.2013).
[    1.714805] [drm] Driver supports precise vblank timestamp query.
[    1.714893] vgaarb: device changed decodes: PCI:0000:00:02.0,olddecodes=io+mem,decodes=io+mem:owns=io+mem
[    1.792454] fbcon: inteldrmfb (fb0) is primary device
[    1.792519] Console: switching to colour frame buffer device 170x48
[    1.792552] i915 0000:00:02.0: fb0: inteldrmfb frame buffer device
[    1.792556] i915 0000:00:02.0: registered panic notifier
[    1.793227] ACPI: Video Device [GFX0] (multi-head: yes  rom: no  post: no)
[    1.793317] input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/LNXVIDEO:00/input/input7
[    1.793395] [drm] Initialized i915 1.6.0 20141121 for 0000:00:02.0 on minor 0
[    1.890871] usb 1-1: new high-speed USB device number 2 using ehci-pci
[    1.998964] ata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)
[    2.005302] ata1.00: ATA-8: ST1000LM024 HN-M101MBB, 2BA30003, max UDMA/133
[    2.005307] ata1.00: 1953525168 sectors, multi 0: LBA48 NCQ (depth 31/32), AA
[    2.011709] ata1.00: configured for UDMA/133
[    2.011835] scsi 0:0:0:0: Direct-Access     ATA      ST1000LM024 HN-M 0003 PQ: 0 ANSI: 5
[    2.012091] sd 0:0:0:0: [sda] 1953525168 512-byte logical blocks: (1.00 TB/931 GiB)
[    2.012095] sd 0:0:0:0: [sda] 4096-byte physical blocks
[    2.012134] sd 0:0:0:0: Attached scsi generic sg0 type 0
[    2.012168] sd 0:0:0:0: [sda] Write Protect is off
[    2.012172] sd 0:0:0:0: [sda] Mode Sense: 00 3a 00 00
[    2.012209] sd 0:0:0:0: [sda] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
[    2.023330] usb 1-1: New USB device found, idVendor=8087, idProduct=8000
[    2.023334] usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[    2.023710] hub 1-1:1.0: USB hub found
[    2.023787] hub 1-1:1.0: 8 ports detected
[    2.143156]  sda: sda1 sda2 sda3 sda4 < sda5 sda6 >
[    2.144191] sd 0:0:0:0: [sda] Attached SCSI disk
[    2.295175] usb 1-1.3: new low-speed USB device number 3 using ehci-pci
[    2.319189] tsc: Refined TSC clocksource calibration: 2394.456 MHz
[    2.391879] usb 1-1.3: New USB device found, idVendor=046d, idProduct=c05a
[    2.391884] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[    2.391886] usb 1-1.3: Product: USB Optical Mouse
[    2.391888] usb 1-1.3: Manufacturer: Logitech
[    2.395241] hidraw: raw HID events driver (C) Jiri Kosina
[    2.398703] usbcore: registered new interface driver usbhid
[    2.398705] usbhid: USB HID core driver
[    2.400327] input: Logitech USB Optical Mouse as /devices/pci0000:00/0000:00:1d.0/usb1/1-1/1-1.3/1-1.3:1.0/0003:046D:C05A.0001/input/input8
[    2.400424] hid-generic 0003:046D:C05A.0001: input,hidraw0: USB HID v1.11 Mouse [Logitech USB Optical Mouse] on usb-0000:00:1d.0-1.3/input0
[    2.467307] usb 1-1.5: new full-speed USB device number 4 using ehci-pci
[    2.561358] usb 1-1.5: New USB device found, idVendor=8087, idProduct=07dc
[    2.561362] usb 1-1.5: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[    2.631428] usb 1-1.7: new high-speed USB device number 5 using ehci-pci
[    2.724351] usb 1-1.7: New USB device found, idVendor=0bda, idProduct=0129
[    2.724356] usb 1-1.7: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[    2.724358] usb 1-1.7: Product: USB2.0-CRW
[    2.724360] usb 1-1.7: Manufacturer: Generic
[    2.724362] usb 1-1.7: SerialNumber: 20100201396000000
[    2.729008] usbcore: registered new interface driver rtsx_usb
[    2.795570] usb 1-1.8: new high-speed USB device number 6 using ehci-pci
[    2.941937] usb 1-1.8: New USB device found, idVendor=1bcf, idProduct=2b8a
[    2.941941] usb 1-1.8: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[    2.941944] usb 1-1.8: Product: Integrated_Webcam_HD
[    2.941946] usb 1-1.8: Manufacturer: SunplusIT Inc
[    3.322993] Switched to clocksource tsc
[    3.347870] psmouse serio1: synaptics: queried max coordinates: x [..5660], y [..4642]
[    3.442734] psmouse serio1: synaptics: queried min coordinates: x [1366..], y [1298..]
[    3.617988] psmouse serio1: synaptics: Touchpad model: 1, fw: 8.1, id: 0x1e2b1, caps: 0xd40123/0x840300/0x126800, board id: 2934, fw id: 1541093
[    3.735279] input: SynPS/2 Synaptics TouchPad as /devices/platform/i8042/serio1/input/input6
[    3.994260] EXT4-fs (sda5): mounted filesystem with ordered data mode. Opts: (null)
[    4.495595] random: nonblocking pool is initialized
[   17.988889] Adding 8272892k swap on /dev/sda6.  Priority:-1 extents:1 across:8272892k FS
[   18.160541] systemd-udevd[322]: starting version 204
[   18.429583] shpchp: Standard Hot Plug PCI Controller Driver version: 0.4
[   18.479976] snd_hda_intel 0000:00:03.0: bound 0000:00:02.0 (ops i915_audio_component_bind_ops [i915])
[   18.504678] cfg80211: Calling CRDA to update world regulatory domain
[   18.511151] Intel(R) Wireless WiFi driver for Linux, in-tree:
[   18.511154] Copyright(c) 2003- 2014 Intel Corporation
[   18.528632] sound hdaudioC0D0: autoconfig: line_outs=1 (0x14/0x0/0x0/0x0/0x0) type:speaker
[   18.528637] sound hdaudioC0D0:    speaker_outs=0 (0x0/0x0/0x0/0x0/0x0)
[   18.528640] sound hdaudioC0D0:    hp_outs=1 (0x21/0x0/0x0/0x0/0x0)
[   18.528642] sound hdaudioC0D0:    mono: mono_out=0x0
[   18.528644] sound hdaudioC0D0:    inputs:
[   18.528647] sound hdaudioC0D0:      Headset Mic=0x19
[   18.528650] sound hdaudioC0D0:      Headphone Mic=0x1a
[   18.528652] sound hdaudioC0D0:      Internal Mic=0x12
[   18.543627] input: HDA Intel PCH Headphone Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input9
[   18.551162] Bluetooth: Core ver 2.20
[   18.551179] NET: Registered protocol family 31
[   18.551180] Bluetooth: HCI device and connection manager initialized
[   18.551185] Bluetooth: HCI socket layer initialized
[   18.551188] Bluetooth: L2CAP socket layer initialized
[   18.551193] Bluetooth: SCO socket layer initialized
[   18.553134] usbcore: registered new interface driver btusb
[   18.561501] AVX2 version of gcm_enc/dec engaged.
[   18.561504] AES CTR mode by8 optimization enabled
[   18.567653] Bluetooth: hci0: read Intel version: 370710010002030d00
[   18.581722] dcdbas dcdbas: Dell Systems Management Base Driver (version 5.6.0-3.2)
[   18.654343] input: Dell WMI hotkeys as /devices/virtual/input/input10
[   18.661458] hid-rmi 0018:06CB:2934.0002: Scanning PDT...
[   18.664700] intel_rapl: Found RAPL domain package
[   18.664704] intel_rapl: Found RAPL domain core
[   18.664706] intel_rapl: Found RAPL domain uncore
[   18.664708] intel_rapl: Found RAPL domain dram
[   18.664712] intel_rapl: RAPL package 0 domain package locked by BIOS
[   18.665707] hid-rmi 0018:06CB:2934.0002: Found F34 on page 0x00
[   18.668208] hid-rmi 0018:06CB:2934.0002: Found F01 on page 0x00
[   18.670703] hid-rmi 0018:06CB:2934.0002: Found F11 on page 0x00
[   18.676627] hid-rmi 0018:06CB:2934.0002: Found F54 on page 0x01
[   18.679109] hid-rmi 0018:06CB:2934.0002: Found F30 on page 0x01
[   18.685239] hid-rmi 0018:06CB:2934.0002: Found F55 on page 0x02
[   18.692019] hid-rmi 0018:06CB:2934.0002: rmi_scan_pdt: Done with PDT scan.
[   18.692621] input: HDA Intel HDMI HDMI/DP,pcm=3 as /devices/pci0000:00/0000:00:03.0/sound/card1/input12
[   18.692702] input: HDA Intel HDMI HDMI/DP,pcm=7 as /devices/pci0000:00/0000:00:03.0/sound/card1/input13
[   18.692781] input: HDA Intel HDMI HDMI/DP,pcm=8 as /devices/pci0000:00/0000:00:03.0/sound/card1/input14
[   18.720100] hid-rmi 0018:06CB:2934.0002: rmi_populate_f11: size in mm: 102 x 77
[   18.731170] hid-rmi 0018:06CB:2934.0002: firmware id: 1541093
[   18.731249] input: DLL063E:00 06CB:2934 as /devices/pci0000:00/INT33C3:00/i2c-8/i2c-DLL063E:00/0018:06CB:2934.0002/input/input11
[   18.731420] hid-rmi 0018:06CB:2934.0002: input,hidraw1: <UNKNOWN> HID v1.00 Pointer [DLL063E:00 06CB:2934] on 
[   18.767899] iwlwifi 0000:02:00.0: loaded firmware version 25.17.12.0 op_mode iwlmvm
[   18.778004] audit: type=1400 audit(1547250586.633:2): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/sbin/dhclient" pid=506 comm="apparmor_parser"
[   18.778010] audit: type=1400 audit(1547250586.633:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-client.action" pid=506 comm="apparmor_parser"
[   18.778014] audit: type=1400 audit(1547250586.633:4): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/connman/scripts/dhclient-script" pid=506 comm="apparmor_parser"
[   18.778454] audit: type=1400 audit(1547250586.633:5): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="/sbin/dhclient" pid=507 comm="apparmor_parser"
[   18.778462] audit: type=1400 audit(1547250586.633:6): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-client.action" pid=507 comm="apparmor_parser"
[   18.778467] audit: type=1400 audit(1547250586.633:7): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="/usr/lib/connman/scripts/dhclient-script" pid=507 comm="apparmor_parser"
[   18.783170] iwlwifi 0000:02:00.0: Detected Intel(R) Dual Band Wireless AC 3160, REV=0x164
[   18.783241] iwlwifi 0000:02:00.0: L1 Enabled - LTR Enabled
[   18.783480] iwlwifi 0000:02:00.0: L1 Enabled - LTR Enabled
[   18.797188] audit: type=1400 audit(1547250586.653:8): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/sbin/ntpd" pid=512 comm="apparmor_parser"
[   18.797198] audit: type=1400 audit(1547250586.653:9): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="/usr/sbin/ntpd" pid=513 comm="apparmor_parser"
[   18.832242] Bluetooth: hci0: Intel Bluetooth firmware file: intel/ibt-hw-37.7.10-fw-1.0.2.3.d.bseq
[   18.889475] ieee80211 phy0: Selected rate control algorithm 'iwl-mvm-rs'
[   18.910234] cfg80211: World regulatory domain updated:
[   18.910238] cfg80211:  DFS Master region: unset
[   18.910239] cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)
[   18.910242] cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)
[   18.910244] cfg80211:   (2457000 KHz - 2482000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)
[   18.910245] cfg80211:   (2474000 KHz - 2494000 KHz @ 20000 KHz), (300 mBi, 2000 mBm), (N/A)
[   18.910247] cfg80211:   (5170000 KHz - 5250000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)
[   18.910249] cfg80211:   (5735000 KHz - 5835000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A)
[   19.015905] Bluetooth: hci0: Intel Bluetooth firmware patch completed and activated
[   19.229481] media: Linux media interface: v0.10
[   19.235376] Linux video capture interface: v2.00
[   19.242678] uvcvideo: Found UVC 1.00 device Integrated_Webcam_HD (1bcf:2b8a)
[   19.251487] input: Integrated_Webcam_HD as /devices/pci0000:00/0000:00:1d.0/usb1/1-1/1-1.8/1-1.8:1.0/input/input15
[   19.251595] usbcore: registered new interface driver uvcvideo
[   19.251598] USB Video Class driver (1.1.1)
[   21.626100] EXT4-fs (sda5): re-mounted. Opts: errors=remount-ro
[   22.090208] init: failsafe main process (789) killed by TERM signal
[   22.412579] Bluetooth: RFCOMM TTY layer initialized
[   22.412586] Bluetooth: RFCOMM socket layer initialized
[   22.412590] Bluetooth: RFCOMM ver 1.11
[   22.458918] audit: type=1400 audit(1547250590.309:10): apparmor="STATUS" operation="profile_load" profile="unconfined" name="system_tor" pid=936 comm="apparmor_parser"
[   22.459559] audit: type=1400 audit(1547250590.313:11): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="/sbin/dhclient" pid=935 comm="apparmor_parser"
[   22.497099] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[   22.497102] Bluetooth: BNEP filters: protocol multicast
[   22.497106] Bluetooth: BNEP socket layer initialized
[   22.657849] init: avahi-cups-reload main process (965) terminated with status 1
[   23.494548] zram: Created 4 device(s) ...
[   23.502184] zram0: detected capacity change from 0 to 1031884800
[   23.504097] Adding 1007696k swap on /dev/zram0.  Priority:5 extents:1 across:1007696k SSFS
[   23.506423] zram1: detected capacity change from 0 to 1031884800
[   23.511146] Adding 1007696k swap on /dev/zram1.  Priority:5 extents:1 across:1007696k SSFS
[   23.511896] zram2: detected capacity change from 0 to 1031884800
[   23.515315] Adding 1007696k swap on /dev/zram2.  Priority:5 extents:1 across:1007696k SSFS
[   23.515893] zram3: detected capacity change from 0 to 1031884800
[   23.520706] Adding 1007696k swap on /dev/zram3.  Priority:5 extents:1 across:1007696k SSFS
[   24.121179] vboxdrv: module verification failed: signature and/or  required key missing - tainting kernel
[   24.124640] vboxdrv: Found 4 processor cores.
[   24.125493] vboxdrv: fAsync=0 offMin=0x12c offMax=0x25a4
[   24.125927] vboxdrv: TSC mode is 'synchronous', kernel timer mode is 'normal'.
[   24.125930] vboxdrv: Successfully loaded version 4.3.40 (interface 0x001a000b).
[   24.202072] r8169 0000:01:00.0 eth0: link down
[   24.334592] vboxpci: IOMMU not found (not registered)
[   25.945185] init: plymouth-upstart-bridge main process ended, respawning
[   25.950501] init: plymouth-upstart-bridge main process (1290) terminated with status 1
[   25.950514] init: plymouth-upstart-bridge main process ended, respawning
[   47.445336] iwlwifi 0000:02:00.0: L1 Enabled - LTR Enabled
[   47.445574] iwlwifi 0000:02:00.0: L1 Enabled - LTR Enabled
[   50.879987] wlan0: authenticate with bc:4d:fb:1f:9a:a8
[   50.883333] wlan0: send auth to bc:4d:fb:1f:9a:a8 (try 1/3)
[   50.885403] wlan0: authenticated
[   50.886400] wlan0: associate with bc:4d:fb:1f:9a:a8 (try 1/3)
[   50.890213] wlan0: RX AssocResp from bc:4d:fb:1f:9a:a8 (capab=0x431 status=0 aid=1)
[   50.891337] wlan0: associated
[   50.891390] cfg80211: Calling CRDA for country: US
[   50.894146] cfg80211: Regulatory domain changed to country: US
[   50.894150] cfg80211:  DFS Master region: unset
[   50.894151] cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)
[   50.894154] cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (300 mBi, 2700 mBm), (N/A)
[   50.894157] cfg80211:   (5170000 KHz - 5250000 KHz @ 40000 KHz), (300 mBi, 1700 mBm), (N/A)
[   50.894159] cfg80211:   (5250000 KHz - 5330000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (0 s)
[   50.894161] cfg80211:   (5490000 KHz - 5600000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (0 s)
[   50.894163] cfg80211:   (5650000 KHz - 5710000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (0 s)
[   50.894166] cfg80211:   (5735000 KHz - 5835000 KHz @ 40000 KHz), (300 mBi, 3000 mBm), (N/A)
[   50.894168] cfg80211:   (57240000 KHz - 63720000 KHz @ 2160000 KHz), (N/A, 4000 mBm), (N/A)`;
