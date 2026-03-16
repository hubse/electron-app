# Hello Electron

Hello Electron is a minimal Electron application that displays a simple "Hello World" message in a desktop window.

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
