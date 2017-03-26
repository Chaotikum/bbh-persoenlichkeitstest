const {ipcRenderer} = require('electron')

ipcRenderer.on('set-color', (ev, color) => {
  document.body.style.backgroundColor = color;
})
