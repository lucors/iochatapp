const {app, BrowserWindow} = require("electron");
const path = require("path");
require("dotenv").config();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "app/assets/img/favicon.png"),
    webPreferences: {
      preload: path.join(__dirname, "app/preload.js")
    },
  });
  void win.loadFile("app/index.html");
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
});