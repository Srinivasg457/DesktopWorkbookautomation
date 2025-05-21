app.whenReady().then(() => {
    createWindow();
    // Enable remote debugging
    app.commandLine.appendSwitch('remote-debugging-port', '9222');
  });
  