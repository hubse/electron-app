# Hello Electron

Electron is an open-source framework for building cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. It combines:
- Chromium (the browser engine behind Google Chrome) for rendering the user interface.
- Node.js for accessing the operating system and performing backend tasks.
Electron allows developers to create desktop apps for Windows, macOS, and Linux from a single codebase.


Basic Architecture

+-------------------+
| Main Process      |
| (Node.js)         |
| OS Access         |
+---------+---------+
          |
          |
+---------v---------+
| Renderer Process  |
| (Chromium)        |
| HTML/CSS/JS UI    |
+-------------------+

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

## File Structure

- `main.js`: Main process script that creates the application window.
- `index.html`: The UI of the app.
- `package.json`: Project metadata and build configuration.

## Notes

- The app currently uses default Electron icons.
- The Linux build category is set to "Utility" by default.
- The app is configured to build Snap and AppImage packages for Linux.
