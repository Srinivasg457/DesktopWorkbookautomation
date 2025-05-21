// const { spawn } = require('child_process');
// const { Builder, By, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Launch Electron app with remote debugging
// const electronApp = spawn('/usr/bin/team-logger', ['--remote-debugging-port=9222']);

// electronApp.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// electronApp.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// // Delay WebDriver launch to give Electron time to initialize
// setTimeout(() => {
//   console.log("Attempting to attach WebDriver to Electron app...");
//   launchWebDriver();
// }, 8000);

// async function launchWebDriver() {
//   const options = new chrome.Options();
//   options.debuggerAddress("localhost:9222");

//   try {
//     let driver = await new Builder()
//       .forBrowser('chrome')
//       .setChromeOptions(options)
//       .build();

//     console.log("Connected to Electron app.");

//     // // Wait for login window to appear (more than one window)
//     let allWindows = [];
//     // for (let i = 0; i < 10; i++) {
//     //   allWindows = await driver.getAllWindowHandles();
//     //   if (allWindows.length > 1) break;
//     //   await driver.sleep(1000);
//     // }

//     let retries = 0;
//     while (retries < 20) {
//       allWindows = await driver.getAllWindowHandles();
//       console.log("Window count:", allWindows.length);
//       if (allWindows.length > 1) break;
//       await driver.sleep(1000);
//       retries++;
//     }
    


//     if (allWindows.length > 1) {
//       await driver.switchTo().window(allWindows[1]);
//       console.log("Switched to login window.");

//       const title = await driver.getTitle();
//       console.log("Window title:", title);

//       // Perform login steps
//       const emailField = await driver.wait(until.elementLocated(By.id('email')), 20000);
//       await emailField.sendKeys('srinivasg457@gmail.com');
//       console.log("Email entered.");

//       const passwordField = await driver.wait(until.elementLocated(By.id('password')), 20000);
//       await passwordField.sendKeys('Shree@1234');
//       console.log("Password entered.");

//       const loginButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Login']")), 20000);
//       await loginButton.click();
//       console.log("Login button clicked.");

//       await driver.sleep(5000); // Optional wait

//     } else {
//       console.log("Login window did not appear after waiting.");
//     }

//   } catch (err) {
//     console.error("Error with WebDriver:", err);
//   }
// }



const { spawn } = require('child_process');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Launch Electron app with remote debugging
const electronApp = spawn('/usr/bin/team-logger', ['--remote-debugging-port=9222']);

electronApp.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

electronApp.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Delay WebDriver launch to give Electron time to initialize
setTimeout(() => {
  console.log("Attempting to attach WebDriver to Electron app...");
  launchWebDriver();
}, 8000);

async function launchWebDriver() {
  const options = new chrome.Options();
  options.debuggerAddress("localhost:9222");

  try {
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log("Connected to Electron app.");

    // Try to locate login form directly (without checking window count)
    try {
      // Wait for the email field to be present
      const emailField = await driver.wait(until.elementLocated(By.id('email')), 30000);
      console.log("Email field found.");

      await emailField.sendKeys('srinivas.g@limitscale.io');
      console.log("Email entered.");

      const passwordField = await driver.wait(until.elementLocated(By.id('password')), 10000);
      await passwordField.sendKeys('Shree@1234');
      console.log("Password entered.");

      const loginButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Login']")), 10000);
      await loginButton.click();
      console.log("Login button clicked.");

      await driver.sleep(5000); // Optional wait after login

    } catch (e) {
      console.log("Login form elements not found. Possibly not loaded or in a different view.");
    }

  } catch (err) {
    console.error("Error with WebDriver:", err);
  }
}
