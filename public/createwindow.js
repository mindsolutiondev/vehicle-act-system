const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev')
const { app, BrowserWindow, ipcMain, Menu } = electron;

let mainWindow

module.exports = createWindow = (filename,setmenu,closed = true) => {
  mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true
    },
    width: 1000,
		height: 450,
    title: "",
    resizable: false,
    frame: false
  })
  isDev ? console.log('build menu ...') : Menu.setApplicationMenu(null)
  mainWindow.loadURL(`file://${path.join(__dirname,`./settings/${filename}.html`)}`);

  mainWindow.on("closed", (event) => { 
    event.preventDefault();
    createWindow = null;
  })

  return mainWindow

}

