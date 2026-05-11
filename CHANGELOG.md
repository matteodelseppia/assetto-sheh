# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Termux terminal support.
- Termination Feature.

## [1.3.1] - 2026-05-10
### Fixed
- Removed overused morgan() function for ``Request Logging``

## [1.3.0] - 2026-05-08

### Added
- Request Logging for server.
    - User-Agent
    - Server's IP
    - Status
    - Response time

### Changed
- Uses Ephemeral Port instead of 8080.

## [1.2.0] - 2026-04-23

### Added
- Mobile-optimized UI with on-screen keyboard modifiers:
    - Added sticky **CTRL** and **ALT** key support for mobile sessions.
    - Added **ESC**, **TAB**, **HOME**, **END** keys.
    - Added the arrow keys for up, down, left and right: **↑** **↓** **←** **→**.
    - Added the **dash** key (-), **slash** (/), **backslash** (\\) and **Pipe** key (|).
    - Added touch gestures for (pinch-to-zoom) to scale in and out of the terminal text.

## [1.1.2] - 2026-04-16

### Added
- **Convenient Shell Detection**: `sheh` identifies the specific parent shell process from which it was launched.
- **Verified Support** for a wide array of shells:
    - **Bourne-shells:** bash, dash, zsh, ksh
    - **C-shells:** csh, tcsh
    - **Windows:** powershell
    - **Friendly Interactive:** fish

### Changed
- Switched from using $SHELL to detecting the actual running shell

## [1.0.2] - 2026-04-11

### Added
- Local terminal access via browser.
- Local network support.
- Suppports bash & powershell.

### Fixed
- Improve package metadata.
- Neatly organize files.

## [1.0.1] - 2026-04-10

### Changed
- Pathces for package.json metadata.
- Update README.


---

[Unreleased]: https://github.com/waxodium/sheh/compare/v1.3.1...HEAD
[1.3.0]: https://github.com/waxodium/sheh/releases/tag/v1.3.0
[1.2.0]: https://github.com/waxodium/sheh/releases/tag/v1.2.0
[1.1.2]: https://github.com/waxodium/sheh/releases/tag/v1.1.2
[1.0.2]: https://github.com/waxodium/sheh/releases/tag/v1.0.2
[1.0.1]: https://github.com/waxodium/sheh/releases/tag/v1.0.1
