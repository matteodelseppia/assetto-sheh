# Sheh

> **S**hell **E**xposed **H**TTP

Sheh is a command line tool that broadcast you terminal to your browser locally and with local network. As sheh is intended to be cross-platform.

![early](https://img.shields.io/badge/status-early-gray)
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

***S**hell **E**xposed **H**TTP* are currently built with

![express](https://img.shields.io/badge/express-111?style=flat-square&logo=express&logoColor=red)
![ws](https://img.shields.io/badge/ws-111?style=flat-square&logo=websocket&logoColor=white)
![node-pty](https://img.shields.io/badge/node--pty-111?style=flat-square&logo=gnometerminal&logoColor=white)
![xterm.js](https://img.shields.io/badge/xterm.js-111?style=flat-square&logo=windowsterminal&logoColor=white)
![node](https://img.shields.io/badge/node_standard_library-111?style=flat-square&logo=nodedotjs&logoColor=green)

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


![svg](https://github.com/user-attachments/assets/35b028c2-6b9c-4bb2-af0b-cd3a55353af8)



---

## Shells Support
🚧 This project is under development and early concept construction. 

While Sheh has a focus to widely support mainstream shells as much as possible. 🌐

| Shell | Status |
| :--- | :--- |
| `bash` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `powershell` | ![](https://img.shields.io/badge/supported-0d2e14?style=flat-square&labelColor=0d2e14&color=3ecf6c) |
| `zsh` | ![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) |
| `fish` | ![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) |
| `tcsh` | ![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) |
| `ksh` | ![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) |

---

## Notes

> [!NOTE]
> Sheh is in an early stage of concept and development. Expect bugs, vulnerabilities, and missing features.

> [!CAUTION]
> Sheh is for local use only and does not include built-in authentication or security features. This is not a sandboxed environment, it is a live broadcast of your actual terminal. Any commands executed or changes made within Sheh will take effect on your machine in real time.

![](https://img.shields.io/badge/unsupported-1a1a1a?style=flat-square&labelColor=1a1a1a&color=ffffff) Termux is currently not supported. Sheh relies on a native PTY environment, which is unavailable in Termux's sandbox. Support is planned for a future release.

---

## LICENSE
Sheh (**S**hell **E**xposed **H**TTP) is [GPL-3.0](https://github.com/waxodium/sheh/blob/main/LICENSE) Licensed

