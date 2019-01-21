let ipc = require('electron').ipcMain;
const { app, BrowserWindow } = require('electron')


let win

function createWindow () {
  win = new BrowserWindow({ width: 1200, height: 800 });
  win.setResizable(false);
  win.loadFile('index.html');

  //win.webContents.openDevTools()
  //win.setFullScreen(true);
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});

ipc.on('testCom', function(event, data){
    console.log(data);
});