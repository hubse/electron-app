# Hello Electron

Electron is an open-source framework for building cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. It combines:
- Chromium (the browser engine behind Google Chrome) for rendering the user interface.
- Node.js for accessing the operating system and performing backend tasks.
Electron allows developers to create desktop apps for Windows, macOS, and Linux from a single codebase.

### Explanation

- **Main Process**
  - Runs Node.js
  - Controls the application lifecycle
  - Manages native OS features (windows, menus, tray, etc.)

- **Renderer Process**
  - Runs inside Chromium
  - Handles the user interface
  - Each window/tab runs in its own renderer process

- **IPC (Inter-Process Communication)**
  - Bridge between Main and Renderer processes
  - Used to safely send data and commands between UI and system layer

## Features

- Built with Electron
- Simple UI displaying "Hello World to Electron App"
- Cross-platform desktop application

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to launch the app in development mode

## Building the App

To build the distributable app, run:

```
npm run build
```

This uses `electron-builder` to package the app for your platform. The output files will be located in the `dist` directory.


## Notes

- The Linux build category is set to "Utility" by default.
- The app is configured to build Snap and AppImage packages for Linux.
