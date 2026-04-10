# Sheh

> **S**hell **E**xposed **H**TTP

Sheh is a command line tool that broadcast you terminal to your browser locally and with local network. As sheh is intended to be cross-platform.

![early](https://img.shields.io/badge/status-early-gray)
![javascript](https://img.shields.io/badge/language-javascript-yellow)
![license](https://img.shields.io/badge/license-GPLv3.0-blue)


<div align="center">
  <img src="https://github.com/user-attachments/assets/d960b4ee-4687-4b73-a508-61505fe1f29b" height="400" alt="linux-sheh" />
  <img src="https://github.com/user-attachments/assets/7cf8c742-0b32-4192-b9a2-3d5f4df3d942" width="600">
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

<img width="694" height="257" alt="image" src="https://github.com/user-attachments/assets/efe1d6fb-c5a4-4538-8890-2c4e476c71f5" />


Open the URL. Your shell is live in the browser.

---

## Features
Sheh is simplified. Including its functionality and setup.

![features](https://github.com/user-attachments/assets/8c9c3354-6e03-466b-b50b-0976c218d306)
<svg width="600" height="420" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="420" fill="#050505" />

  <g transform="translate(24, 32)">
    <rect width="264" height="170" rx="8" fill="#111111" stroke="#1e1e1e" />
    <path d="M0 1 L264 1" stroke="#3ecf6c" stroke-width="2" />
    <rect x="20" y="20" width="36" height="36" rx="6" fill="#0d2e14" stroke="#1a4a25" />
    <g transform="translate(30, 30)" stroke="#3ecf6c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="3" width="14" height="10" rx="2" />
      <path d="M4 7l2 2-2 2M8 11h4" />
    </g>
    <text x="20" y="76" font-family="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace" font-size="13" font-weight="500" fill="#dddddd">Local server</text>
    <text x="20" y="96" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Lightweight HTTP local server on</text>
    <text x="20" y="112" font-family="ui-monospace, monospace" font-size="11" fill="#777777">your machine. Sync lively to the</text>
    <text x="20" y="128" font-family="ui-monospace, monospace" font-size="11" fill="#777777">terminal session.</text>
    <rect x="20" y="142" width="56" height="18" rx="3" fill="#0d2e14" stroke="#1a4a25" />
    <text x="48" y="154" font-family="ui-monospace, monospace" font-size="9" font-weight="500" fill="#3ecf6c" text-anchor="middle">NODE.JS</text>
  </g>

  <g transform="translate(312, 32)">
    <rect width="264" height="170" rx="8" fill="#111111" stroke="#1e1e1e" />
    <path d="M0 1 L264 1" stroke="#5ba3e8" stroke-width="2" />
    <rect x="20" y="20" width="36" height="36" rx="6" fill="#0d1e2e" stroke="#1a3050" />
    <g transform="translate(30, 30)" stroke="#5ba3e8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="2" width="14" height="12" rx="2" />
      <path d="M1 5h14" />
      <circle cx="3.5" cy="3.5" r="0.5" fill="#5ba3e8" />
      <circle cx="5.5" cy="3.5" r="0.5" fill="#5ba3e8" />
      <circle cx="7.5" cy="3.5" r="0.5" fill="#5ba3e8" />
      <path d="M4 9l2 1.5L4 12M9 12h3" />
    </g>
    <text x="20" y="76" font-family="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace" font-size="13" font-weight="500" fill="#dddddd">Browser terminal</text>
    <text x="20" y="96" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Full experience terminal in the</text>
    <text x="20" y="112" font-family="ui-monospace, monospace" font-size="11" fill="#777777">browser. Resize, scroll, type</text>
    <text x="20" y="128" font-family="ui-monospace, monospace" font-size="11" fill="#777777">and it behaves like your terminal.</text>
    <rect x="20" y="142" width="65" height="18" rx="3" fill="#0d1e2e" stroke="#1a3050" />
    <text x="52.5" y="154" font-family="ui-monospace, monospace" font-size="9" font-weight="500" fill="#5ba3e8" text-anchor="middle">XTERM.JS</text>
  </g>

  <g transform="translate(24, 214)">
    <rect width="264" height="170" rx="8" fill="#111111" stroke="#1e1e1e" />
    <path d="M0 1 L264 1" stroke="#a78bfa" stroke-width="2" />
    <rect x="20" y="20" width="36" height="36" rx="6" fill="#1a1530" stroke="#2a2050" />
    <g transform="translate(30, 30)" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="4" width="6" height="8" rx="1.5" />
      <rect x="9" y="4" width="6" height="8" rx="1.5" />
      <path d="M7 8h2" />
    </g>
    <text x="20" y="76" font-family="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace" font-size="13" font-weight="500" fill="#dddddd">Cross-platform</text>
    <text x="20" y="96" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Supports Windows and Linux.</text>
    <text x="20" y="112" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Anything with Bash and</text>
    <text x="20" y="128" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Powershell will work.</text>
    <rect x="20" y="142" width="105" height="18" rx="3" fill="#1a1530" stroke="#2a2050" />
    <text x="72.5" y="154" font-family="ui-monospace, monospace" font-size="9" font-weight="500" fill="#a78bfa" text-anchor="middle">WINDOWS + LINUX</text>
  </g>

  <g transform="translate(312, 214)">
    <rect width="264" height="170" rx="8" fill="#111111" stroke="#1e1e1e" />
    <path d="M0 1 L264 1" stroke="#f59e42" stroke-width="2" />
    <rect x="20" y="20" width="36" height="36" rx="6" fill="#2e1e0d" stroke="#4a3020" />
    <g transform="translate(30, 30)" stroke="#f59e42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 8h10M8 3l5 5-5 5" />
    </g>
    <text x="20" y="76" font-family="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace" font-size="13" font-weight="500" fill="#dddddd">Easy setup</text>
    <text x="20" y="96" font-family="ui-monospace, monospace" font-size="11" fill="#777777">One command, launch locally.</text>
    <text x="20" y="112" font-family="ui-monospace, monospace" font-size="11" fill="#777777">No daemons or system services.</text>
    <text x="20" y="128" font-family="ui-monospace, monospace" font-size="11" fill="#777777">Use with ease and no sandbox.</text>
    <rect x="20" y="142" width="45" height="18" rx="3" fill="#2e1e0d" stroke="#4a3020" />
    <text x="42.5" y="154" font-family="ui-monospace, monospace" font-size="9" font-weight="500" fill="#f59e42" text-anchor="middle">SHEH</text>
  </g>
</svg>



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

