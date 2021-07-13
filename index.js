const url = require('url');
const path = require('path');
const fs = require('fs');
const electron = require('electron');


const { app, BrowserWindow, Notification,ipcMain } = electron;



var JSON_PATH = './Config.json';

let rawdata = fs.readFileSync(JSON_PATH);
let appSet = JSON.parse(rawdata)



let isWindowMax = false;


function createNotfiy(title, description) {
    new Notification({title: title, body: description, icon:appSet['appIcon'] }).show()
};


function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        frame: false,
        minWidth: 1000,
        minHeight: 600,
        icon: 'favicon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, '/Page/index.html'),
            protocol: 'file:',
            slashes: true,
        })
    );

    ipcMain.on('close-window',()=>{
        createNotfiy('Sound Near','Pencere kapatıldı')
        win.close()
    });

    ipcMain.on('maxim-window',()=>{
        if(isWindowMax == false){
            win.maximize()
            isWindowMax = true;
        }else{
            win.unmaximize()
            isWindowMax = false;
        }
    });

    ipcMain.on('minim-window',()=>{
        win.minimize()
    });

};

app.whenReady().then(createWindow)



app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

