const {ipcRenderer} = require('electron');

document.getElementById('exit-button').addEventListener('click', () => {
    ipcRenderer.send('EXIT');
    console.log("Sent")
});