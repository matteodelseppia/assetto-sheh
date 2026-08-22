# Sheh

> **Sh**ell **E**xposed **H**TTP

[Gotty](https://github.com/yudai/gotty) inspired.
Sheh is a command line tool that broadcasts your terminal to your browser on localhost. It works for every Unix/Linux shell and even PowerShell!

![NPM Version](https://img.shields.io/npm/v/@matteodelseppia/assetto-sheh?color=red)
![javascript](https://img.shields.io/badge/language-javascript-yellow)
![license](https://img.shields.io/badge/license-GPLv3.0-blue)


<div align="center">
  <img src="https://github.com/user-attachments/assets/309e08c2-7caf-497d-a907-91a730661955" width="800" alt="sheh-linux" />
  <p><em>Running sheh on Linux</em></p>
  
  <br />

  <img src="https://github.com/user-attachments/assets/e44ca70a-a4d2-4233-af18-7902b524f10b" width="800" alt="win-sheh" />
  <p><em>Running sheh on Windows</em></p>
</div>


---

## Stack

***Sh**ell **E**xposed **H**TTP* are currently built with

![express](https://img.shields.io/badge/express-111?style=flat-square&logo=express&logoColor=red)
![ws](https://img.shields.io/badge/ws-111?style=flat-square&logo=socketdotio&logoColor=white)
![node-pty](https://img.shields.io/badge/node--pty-111?style=flat-square&logo=gnometerminal&logoColor=white)
![xterm.js](https://img.shields.io/badge/xterm.js-111?style=flat-square&logo=anydesk&logoColor=white)
![node](https://img.shields.io/badge/node_standard_library-111?style=flat-square&logo=nodedotjs&logoColor=green)
![morgan](https://img.shields.io/badge/morgan-111?style=flat-square&logo=datadog&logoColor=62F095)

---

## Install
Get via the node package manager registry.

```bash
npm install -g @matteodelseppia/assetto-sheh
```

---

## Usage

Launching ***S**hell **E**xposed **H**TTP*...

```bash
sheh
```

By default, Sheh binds only to `127.0.0.1`, so it cannot be accessed from your local network.

To intentionally expose it on your local network, use:

```bash
sheh --network
```

The network mode has no authentication or encryption; use it only on networks you trust.

It will output something like this:

<img width="612" height="260" alt="output" src="https://github.com/user-attachments/assets/ad4c870e-0555-41a6-ab6a-8de1c4b65950" />

[Visit sheh wiki](https://github.com/matteodelseppia/assetto-sheh/wiki) for more documentations and CLI usage

---

## Features
Sheh is simplified. Including its functionality and setup.


<img width="1500" height="562" alt="sheh" src="https://github.com/user-attachments/assets/102c9ab5-cbe6-49c0-a43f-2f7826904cda" />


### Traits:
* Works for every shells.
* Hosts on localhost by default; local-network access requires `--network`.
* Usage through Browser. (Modern such as Firefox, Chrome, Edge)
* UX keys control for mobile devices.

---

## Shells Support
Sheh starts with your current **running** shell. So, shells can run interactively depends on processing shell you ran your `sheh` command from.
Below are the verified and tested shells:

| Shell | Status |
| :--- | :--- |
| `sh` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `bash` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `zsh` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `ksh` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `dash`| ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `tcsh` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `csh` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `powershell` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `fish` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `nushell` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |


Niche shell supports:
[CGTerm](https://github.com/MasterArd/CGTerm) & [fcsh](https://github.com/waxodium/fcsh). Check them out!

---

## News 📢
### 1.4.0

### Added
- Command Line Interface and commands
    - shell: display sheh detected shell
    - version: print version number
    - help: show the CLI manual
    - server: manages sheh childs

> [!WARNING]
> 1.4.0 is deprecated because of a critical code mistake, please use  the later version of sheh
(>v1.4.0)

Check more in [CHANGELOG]

---

## Notes

> [!NOTE]
> Sheh is in an early stage of concept and development. Expect bugs, vulnerabilities, and missing features.

> [!CAUTION]
> Sheh binds to localhost by default. Passing `--network` exposes an unauthenticated, unencrypted, unsandboxed terminal on your local network; anyone who can reach it can run commands as you. Use network mode only on a trusted network. In accordance with the GPL-3.0 license, this software is provided "as is" without warranty of any kind. The authors assume no liability for data loss, security breaches, or system damage resulting from its use. Use at your own risk.

![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) Termux is currently not supported. Sheh relies on a native PTY environment, which is unavailable in Termux's sandbox. Support is planned for a future release.

---
## Contribution
Sheh are always welcome for cooperating. Contributors can contribute through by making a fork of this repository or using GitHub Codespaces then do a Pull Request

---

## LICENSE
Sheh (**Sh**ell **E**xposed **H**TTP) is [GPL-3.0](https://github.com/matteodelseppia/assetto-sheh/blob/main/LICENSE) Licensed


[CHANGELOG]: https://github.com/matteodelseppia/assetto-sheh/blob/main/CHANGELOG.md





