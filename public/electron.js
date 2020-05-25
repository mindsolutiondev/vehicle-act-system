const electron = require("electron")
// const isDev = require("electron-is-dev")
const server = require("./backend/app")
let path = require("path")
const kill = require("kill-port")
const log = require("electron-log")
const updater = require("electron-updater")
const menu = require("./menu")
const axios = require("axios")
const isEmpty = require("lodash.isempty")
const createwindow = require("./createwindow")
const contextMenu = require("electron-context-menu")
const debug = require("electron-debug")
const url = require("url")
const { app, BrowserWindow, ipcMain } = electron
require("dotenv").config()
let regedit = require("regedit")
regedit.setExternalVBSLocation("resources/regedit/vbs")

debug()

// Keep a reference for dev mode
let dev = false

// Determine the mode (dev or production)
if (
  process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
) {
  dev = true
}

function sendStatusToWindow(message) {
  console.log(message)
}

const autoUpdater = updater.autoUpdater
autoUpdater.autoDownload = true

autoUpdater.setFeedURL({
  provider: "github",
  repo: "vehicle-act-system",
  owner: "mindsolutiondev",
  private: true,
  token: "06aca3e2556b54627487aa35def4c6b34b9959d4",
})

autoUpdater.logger = log
autoUpdater.logger.transports.file.level = "info"
log.info("App starting...")

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...")
})
autoUpdater.on("update-available", (info) => {
  sendStatusToWindow("Update available.")
})
autoUpdater.on("update-not-available", (info) => {
  sendStatusToWindow("Update not available.")
})
autoUpdater.on("error", (err) => {
  sendStatusToWindow("Error in auto-updater. " + err)
})
autoUpdater.on("download-progress", (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond
  log_message = log_message + " - Downloaded " + progressObj.percent + "%"
  log_message =
    log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")"
  sendStatusToWindow(log_message)
})
autoUpdater.on("update-downloaded", (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  sendStatusToWindow("Update downloaded")

  setTimeout(function () {
    autoUpdater.quitAndInstall()
  }, 5000)
})

let mainWindow
var webServer
let portServer = 8020
let createwin

contextMenu({ showInspectElement: false })

app.on("ready", async () => {
  app.server = server
  autoUpdater.checkForUpdatesAndNotify()

  await regedit.createKey(
    "HKCU\\Software\\MindSolution\\vehecle_system",
    function (err) {
      console.log(err)
    }
  )
  await regedit.list(
    ["HKCU\\Software\\MindSolution\\vehecle_system"],
    function (err, result) {
      for (let key in result) {
        if (isEmpty(result[key])) {
          createwin = createwindow("activation", false)
        } else {
          startApp()
        }
      }
    }
  )

  ipcMain.on("activation:keygen", (event, keys) => {
    axios
      .post("http://localhost:8020/api/management/activation", { key: keys })
      .then((data) => {
        if (data.data.status) {
          var valuesToPut = {
            "HKCU\\Software\\MindSolution\\vehecle_system": {
              activationkey: {
                value: data.data.activationkey,
                type: "REG_SZ",
              },
            },
          }
          regedit.putValue(valuesToPut, function (err) {})

          startApp(true)
          createwin.hide()
        } else {
          event.reply("activation:keygen:reply", "fail")
        }
      })
  })
})

ipcMain.on("printPDF", (event, img) => {
  let print = createwindow("printpdf", true)
  ipcMain.on("print:img", (event, check) => {
    if (check) {
      event.reply("print:img:reply", img)
    }
  })

  ipcMain.on("print:img:close", (event, close) => {
    if (close) {
      print.hide()
    }
  })
})

app.on("before-quit", () => {
  console.log("gracefully shutting down ...")
  shuttingDown = true
  webServer.kill()
})

const startApp = async (status = true) => {
  shuttingDown = false
  await app.whenReady()
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
    },
    title: "Insurances",
    resizable: true,
    icon: __dirname + "./icon/256.ico",
  })

  mainWindow.maximize()
  // const startUrl = isDev
  //   ? `${process.env.ELECTRON_START_URL}`
  //   : `file://${path.join(__dirname, "../build/index.html")}`

  if (dev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:3000",
      pathname: "/",
      slashes: true,
    })
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "build", "index.html"),
      slashes: true,
    })
  }

  // Load the index.html

  mainWindow.loadURL(indexPath)

  menu()
  mainWindow.on("closed", () => {
    setTimeout(() => {
      kill(portServer, "tcp").then(console.log).catch(console.log)
    }, 1000)
    app.quit()
    mainWindow = null
  })
}
