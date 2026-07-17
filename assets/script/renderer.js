'use strict';
// Import required modules
const { ipcRenderer } = require('electron');
// HTML targets
const LOGO = document.getElementById('logo');
// HTML targets / buttons
const TOGGLE_SWITCH = document.getElementById('toggle');
const BTN_SCHEDULE_TAB = document.getElementById('btn-schedule-tab');
const BTN_IMAGES_TAB = document.getElementById('btn-images-tab');
const BTN_AUDIO_TAB = document.getElementById('btn-audio-tab');
// HTML targets / buttons / images tab
const BROWSE_BUTTON = document.getElementById("browse-button");

// Attach event listeners
/** change logos upon toggle switch button press */
TOGGLE_SWITCH.addEventListener('change', () => {
    ipcRenderer.send('TOGGLE', TOGGLE_SWITCH.checked);

	if (TOGGLE_SWITCH.checked) LOGO.src = "assets/img/global/icon_on.png";
    else LOGO.src = "assets/img/global/icon_off.png";
})

/** browse for image to add as reminder overlay */
BROWSE_BUTTON.addEventListener('click', () => {
    ipcRenderer.send('BROWSE');
    console.log("rizz");
})
