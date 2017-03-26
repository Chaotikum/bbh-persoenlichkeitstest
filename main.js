const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')

const isKiosk = process.argv.includes('--kiosk')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let priWindow
let sndWindow

function createWindow () {
  var priDisplay = electron.screen.getPrimaryDisplay()
  let sndDisplay = electron.screen.getAllDisplays().find(d => d.id != priDisplay.id)

  priWindow = fullscreenWindowForDisplay(priDisplay)
  priWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'primary.html'),
    protocol: 'file:',
    slashes: true
  }))

  // if there's a seconday display, use it, otherwise show a little box in the
  // bottom right corner
  if (sndDisplay) {
    sndWindow = fullscreenWindowForDisplay(sndDisplay)
  } else {
    sndWindow = new BrowserWindow({
      height: 150,
      width: 200,
      y: priDisplay.bounds.y + priDisplay.workAreaSize.height - 200,
      x: priDisplay.bounds.x + priDisplay.workAreaSize.width - 250,
      frame: false,
      backgroundColor: '#000',
      closable: !isKiosk,
      kiosk: isKiosk,
      alwaysOnTop: true,
    })
  }
  sndWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'secondary.html'),
    protocol: 'file:',
    slashes: true
  }))

  electron.ipcMain.on(
    'set-color',
    (ev, color) => sndWindow.webContents.send('set-color', color))

  // Open the DevTools.
  //priWindow.webContents.openDevTools()
  //sndWindow.webContents.openDevTools()
}

function fullscreenWindowForDisplay(display) {
  return new BrowserWindow({
    height: display.workAreaSize.height,
    width: display.workAreaSize.width,
    x: display.bounds.x,
    y: display.bounds.y,
    fullscreen: true,
    backgroundColor: '#000',
    closable: !isKiosk,
    kiosk: isKiosk,
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (priWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
