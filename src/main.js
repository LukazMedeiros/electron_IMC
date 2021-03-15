const ELECTRON = require("electron");

const { app, ipcMain, BrowserWindow } = ELECTRON;

let mainwindow;

app.on("ready", () => {
  mainwindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  mainwindow.loadURL(`${__dirname}/index.html`);
});

ipcMain.on("calculate", (event, height, weight) => {

  let IMC = weight / (height * height);

  mainwindow.webContents.send("imc", IMC)
});
