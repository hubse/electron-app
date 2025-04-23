const { app, BrowserWindow, ipcMain } = require('electron');
const { websiteURL } = require('./config');

/**
 * Create the main application window and load the configured URL.
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // For security, disable nodeIntegration and enable contextIsolation
      nodeIntegration: true,// to work for require in index
      contextIsolation: false,// to work for require in index
      // Uncomment and enable webviewTag only if needed
      // webviewTag: true,
    }
  });

  win.loadFile('index.html')
  // or Load the URL from configuration
  // win.loadURL(websiteURL);
  
}

app.whenReady().then(() => {
  createWindow();

  // On macOS, recreate window when dock icon is clicked and no other windows are open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // IPC handler for 'ping' messages from renderer process
  ipcMain.on('ping', (event, arg) => {
    console.log('Received ping with arg:', arg);
    event.sender.send('pong', 'pong reply from main process');
  });
});

// Quit the app when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
