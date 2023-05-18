const { app, BrowserWindow, ipcMain, dialog } = require('electron')
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
  ipcMain.handle('succes_connection', (event, ssid)=> {
    dialog.showMessageBox({
      type: 'info',
      title: 'Kết nối thành công',
      message: 'Kết nối với Wi-Fi ' + ssid + ' thành công.',
      buttons: ['OK']
    });
    
  })
  ipcMain.handle('warning_connection', ()=> {
    dialog.showMessageBox({
      type: 'warning',
      title: 'Kết nối thất bại',
      message: 'Kết nối với Wi-Fi thất bại.',
      buttons: ['OK']
    });
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