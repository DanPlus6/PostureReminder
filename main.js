const {app, ipcMain, BrowserWindow} = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height:800,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: '#2b2b2b',       // The background color of the OS control area
        symbolColor: '#FFFFFF',
        height: 45
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

ipcMain.on('EXIT', () => {
  app.quit();
});


app.whenReady().then(createWindow);
