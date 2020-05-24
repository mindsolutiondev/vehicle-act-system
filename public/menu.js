const { remote, Menu } = require('electron')
const createWindow = require('./createwindow')
const isDev = require('electron-is-dev')

const BuildMenu = () => {
  const template = [
    {
      label: 'การตั้งค่า',
      submenu: [
        { 
          label: 'Inspect',
          role: 'toggledevtools'
        },
        {
          label: 'Reload',
          role: 'forcereload'
        }
      ]
    }
  ]

  
  
  const menu = Menu.buildFromTemplate(template)
  isDev ? Menu.setApplicationMenu(menu) : Menu.setApplicationMenu(null)
}

module.exports = BuildMenu;