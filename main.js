const {app, ipcMain, BrowserWindow} = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
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
