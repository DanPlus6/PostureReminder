'use strict';
// Import required modules
const {app, ipcMain, BrowserWindow, nativeImage, Tray} = require('electron');
const path = require('path');

/** @type {BrowserWindow} main window object */
let win;
/** @type {Tray} system tray icon object */
let tray;

/** Main callback to create the window */
function createWindow() {
	// create window
	win = new BrowserWindow({
		width: 1280,
		height: 800,
		titleBarStyle: 'hidden',
		icon: nativeImage.createFromPath(path.join(__dirname, "../img/icon.png")),
		...(process.platform != 'darwin' ? { titleBarOverlay: {
			color: '#2b2b2b',
			symbolColor: '#FFFFFF',
			height: 65,
		} } : {}),
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});
	// load html file for app
	win.loadFile('index.html');

	// create system tray icon
	tray = new Tray(path.join(__dirname, "../img/icon.png"));
}

// exit button
ipcMain.on('EXIT', (event, isChecked) => { if (isChecked) app.quit(); });
ipcMain.on('toggle', (event, isChecked) => {if (isChecked) console.log("Ooh you want to turn it on.");});

// initialize electron and create window
app.whenReady().then(createWindow);
