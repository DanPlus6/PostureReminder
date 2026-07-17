const {app, ipcMain, BrowserWindow} = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height:800,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
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
