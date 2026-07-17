const {ipcRenderer} = require('electron');

const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('change', () => {
    ipcRenderer.send('toggle', toggleSwitch.checked)
})
