'use strict';
// Import required libraries
const {app, ipcMain, BrowserWindow} = require('electron');
const path = require('path');

/** Main callback to create the windows */
function createWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height:800,
		titleBarStyle: 'hidden',
		...(process.platform !== 'darwin' ? { titleBarOverlay: {
			color: '#2b2b2b',
			symbolColor: '#FFFFFF',
			height: 65,
			icon: path.join(__dirname,'assets/img/icon.png')
		} } : {})
	});
	win.loadFile('index.html');
	win.setMenuBarVisibility(true);
}

// exit button
ipcMain.on('EXIT', () => { app.quit(); });

// initialize electron and create window
app.whenReady().then(createWindow);
