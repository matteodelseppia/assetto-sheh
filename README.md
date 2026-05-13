# Sheh

> **Sh**ell **E**xposed **H**TTP

[Gotty](https://github.com/yudai/gotty) inspired.
Sheh is a command line tool that broadcast you terminal to your browser locally and with local network. Sheh works for every Unix/Linux shells and even powershell !

![NPM Version](https://img.shields.io/npm/v/@waxory/sheh?color=red)
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
npm install -g @waxory/sheh
```

---

## Usage

Launching ***S**hell **E**xposed **H**TTP*...

```bash
sheh
```

And it will outputs something like this:

<img width="612" height="260" alt="output" src="https://github.com/user-attachments/assets/ad4c870e-0555-41a6-ab6a-8de1c4b65950" />

Open the URL. Your shell is live in the browser.

---

## Features
Sheh is simplified. Including its functionality and setup.


<img width="1875" height="1313" alt="features" src="https://github.com/user-attachments/assets/d79a0400-4ff4-4c0b-b899-03f039cc1e4d" />

### Traits:
* Works for every shells.
* Host locally on your network or machine.
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


Check more in [CHANGELOG]

---

## Notes

> [!NOTE]
> Sheh is in an early stage of concept and development. Expect bugs, vulnerabilities, and missing features.

> [!CAUTION]
> Sheh is intended for local use only and provides no built-in authentication, encryption, or sandboxing. By running this application, you are creating a live, unshielded broadcast of your system's terminal; any commands executed as malicious or otherwise WILL impact your host machine in real time. In accordance with the GPL-3.0 license, this software is provided "as is" without warranty of any kind. The authors assume no liability for data loss, security breaches, or system damage resulting from its use. Use at your own risk.

![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) Termux is currently not supported. Sheh relies on a native PTY environment, which is unavailable in Termux's sandbox. Support is planned for a future release.

---

## LICENSE
Sheh (**Sh**ell **E**xposed **H**TTP) is [GPL-3.0](https://github.com/waxodium/sheh/blob/main/LICENSE) Licensed


[CHANGELOG]: https://github.com/waxodium/sheh/blob/main/CHANGELOG.md





