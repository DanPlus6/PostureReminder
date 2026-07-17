'use strict';
// Import required libraries
const {app, ipcMain, BrowserWindow} = require('electron');

/** Main callback to create the windows */
function createWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height:800,
		frame: false,
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#2b2b2b',       // The background color of the OS control area
			symbolColor: '#FFFFFF',
			height: 40
		},
		webPreferences: {
		nodeIntegration: true,
		contextIsolation: false
		}
	});
	win.loadFile('index.html');
	win.setMenuBarVisibility(true);
}

// exit button
ipcMain.on('EXIT', () => { app.quit(); });

// initialize electron and create window
app.whenReady().then(createWindow);
