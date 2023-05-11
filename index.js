const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
let isZoom = false;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    sandbox: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload/index.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }

  })

  win.loadFile('ui/index.html')
  win.setResizable(false)
  app.on('activate', () => {
    win.show()
  })
  ipcMain.handle('hide', ()=>{
    win.minimize();
  })
  ipcMain.handle('zoom', ()=>{
    if (isZoom === true) {
      win.unmaximize();
      
      isZoom = false;
    } else {
      win.maximize();
      isZoom = true
    }
    

  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
ipcMain.handle('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})