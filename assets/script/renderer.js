'use strict';
// Import required modules
const { ipcRenderer } = require('electron');
// HTML targets
const TOGGLE_SWITCH = document.getElementById('toggle');
const LOGO = document.getElementById('logo');
const BROWSE_BUTTON = document.getElementById("browse-button");

TOGGLE_SWITCH.addEventListener('change', () => {
    ipcRenderer.send('TOGGLE', TOGGLE_SWITCH.checked);

	if (TOGGLE_SWITCH.checked) LOGO.src = "assets/img/global/icon_on.png";
    else LOGO.src = "assets/img/global/icon_off.png";
})

BROWSE_BUTTON.addEventListener('click', () => {
    ipcRenderer.send('BROWSE');
    console.log("rizz");
})
