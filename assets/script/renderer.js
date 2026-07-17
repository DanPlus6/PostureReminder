'use strict';
// Import required modules
const { ipcRenderer } = require('electron');
// HTML targets
const TOGGLE_SWITCH = document.getElementById('toggle');
const LOGO = document.getElementById('logo');

TOGGLE_SWITCH.addEventListener('change', () => {
    ipcRenderer.send('TOGGLE', TOGGLE_SWITCH.checked);

	if (TOGGLE_SWITCH.checked) LOGO.src = "assets/img/icon_on.png";
    else LOGO.src = "assets/img/icon_off.png";
})
