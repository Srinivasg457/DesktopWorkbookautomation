
// //With The Below Code I can Launch the Chrome 

// const { Builder, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // ✅ Correct path to ChromeDriver
// const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');



// // ✅ You must pass the service into the options
// const options = new chrome.Options();

// (async function main() {
//   let driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .setChromeService(service) // ✅ This ensures the correct driver is used
//     .build();

//   await driver.get('https://dev-app.chataak.in/login/');
//   console.log("Page title is:", await driver.getTitle());

//     // const emailField = await driver.wait(until.elementIsVisible(), 20000);
//     // await driver.wait(until.elementIsVisible(emailField), 10000);
//     // await driver.wait(until.elementIsEnabled(emailField), 10000);
//     // await emailField.sendKeys('srinivasg457@gmail.com');
   


//     const emailfield = await driver.wait(
//       until.elementIsVisible(driver.findElement(By.xpath("//input[@placeholder='johndoe@example.com']"))),
//       3000
//     );
//     await emailfield.clear();
//     await emailfield.sendKeys('srinivasg457@gmail.com');
    
    

//   await driver.quit();
// })();


// const { Builder, By, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Correct path to ChromeDriver binary
// const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');
// const options = new chrome.Options();

// (async function main() {
//   console.log("Launching Chrome...");

//   let driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .setChromeService(service)
//     .build();

//   try {
//     await driver.get('https://dev-app.chataak.in/login/');
//     console.log("Page title is:", await driver.getTitle());

//     // Locate the email input field
//     const emailField = await driver.wait(
//       until.elementLocated(By.xpath("//input[@placeholder='johndoe@example.com']")),
//       10000
//     );

//     await driver.wait(until.elementIsVisible(emailField), 5000);
//     await emailField.clear();
//     await emailField.sendKeys('srinivasg457@gmail.com');

//     console.log("Email entered successfully.");

//   } catch (err) {
//     console.error("Test failed:", err);
//   } finally {
//     await driver.quit();
//     console.log("Browser closed.");
//   }
// })();










// const { Builder, By, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // ✅ Correct path to ChromeDriver
// const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');

// // ✅ You must pass the service into the options
// const options = new chrome.Options();

// (async function main() {
//   let driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .setChromeService(service) // ✅ This ensures the correct driver is used
//     .build();

//   await driver.get('https://dev-app.chataak.in/login/');
//   console.log("Page title is:", await driver.getTitle());

//   const emailField = await driver.wait(
//     until.elementIsVisible(driver.findElement(By.xpath("//input[@placeholder='johndoe@example.com']"))),
//     3000
//   );
//   await emailField.clear();
//   await emailField.sendKeys('srinivasg457@gmail.com');
  
//   // Optionally close the driver
//   // await driver.quit();
// })();









//With The Below COde I can Launch The Electron Js Desktop Tool

// const { exec } = require('child_process');
// const { Builder } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // ✅ Step 1: Launch the Electron app with remote debugging
// exec('/usr/bin/team-logger --remote-debugging-port=9222', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error launching app: ${error.message}`);
//     return;
//   }

//   console.log("Team Logger launched successfully.");

//   // ✅ Step 2: Connect to the running Electron app using Chrome DevTools
//   const options = new chrome.Options();
//   options.debuggerAddress("localhost:9222");  // Must match the port from above

//   (async function automateApp() {
//     try {
//       let driver = await new Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(options)
//         .build();

//       console.log("Connected to Electron app.");
//       console.log("Page title is:", await driver.getTitle());

//  // Wait for the page to load
//  await driver.sleep(2000); // Optional, better to use WebDriver wait

//  // Find and fill the email field
//  await driver.findElement(By.id('email')).sendKeys('srinivasg457@gmail.com');

//  // Find and fill the password field
//  await driver.findElement(By.name('password')).sendKeys('Shree@1234');

//  // Click the sign-in button
//  //await driver.findElement(By.id('login')).click();
//  await driver.findElement(By.xpath("//button[text()='Login']")).click();










//       // TODO: Add your test automation code here (e.g. click buttons, check elements, etc.)

//       // Do not quit immediately if you want to inspect or continue actions
//       // await driver.quit();

//     } catch (err) {
//       console.error("Error with WebDriver:", err);
//     }
//   })();
// });






const { exec } = require('child_process');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// ✅ Launch your Electron app with remote debugging
exec('/usr/bin/team-logger --remote-debugging-port=9222', async (error) => {
  if (error) {
    console.error(`Error launching app: ${error.message}`);
    return;
  }


  console.log("Team Logger launched successfully.");

  const options = new chrome.Options();
  options.debuggerAddress("localhost:9222");

  try {
    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log("Connected to Electron app.");

    // Wait until email input is present

    const emailField = await driver.wait(until.elementLocated(By.id('email')), 20000);
    await driver.wait(until.elementIsVisible(emailField), 10000);
    await driver.wait(until.elementIsEnabled(emailField), 10000);
    await emailField.sendKeys('srinivasg457@gmail.com');



// Similarly, for password field
const passwordField = await driver.wait(until.elementLocated(By.id('password')), 20000);
await driver.wait(until.elementIsVisible(passwordField), 10000);
await driver.wait(until.elementIsEnabled(passwordField), 10000);
await passwordField.sendKeys('Shree@1234');



    
 
    

    const loginButton = await driver.findElement(By.xpath("//button[text()='Login']"));
    await loginButton.click();

    console.log("Login form submitted.");

    // Optional: Wait for navigation or confirmation
    await driver.sleep(5000); // or wait for a specific element

    // Optionally quit the driver
    // await driver.quit();

  } catch (err) {
    console.error("Error with WebDriver:", err);
  }
});


  const a= 2;
// const puppeteer = require('puppeteer-core');

// (async () => {
//   const browser = await puppeteer.connect({
//     browserURL: 'http://localhost:9222', // Electron must be launched with --remote-debugging-port=9222
//   });

//   const pages = await browser.pages();

//   // Find the correct page with login inputs
//   let loginPage = null;
//   for (const page of pages) {
//     const hasEmailInput = await page.$('input[name="email"]');
//     if (hasEmailInput) {
//       loginPage = page;
//       break;
//     }
//   }

//   if (!loginPage) {
//     throw new Error("Login page not found.");
//   }

//   await loginPage.type('input[name="email"]', 'srinivasg457@gmail.com');
//   await loginPage.type('input[name="password"]', 'Shree@1234');
//   await loginPage.click('button[type="submit"]');

//   console.log('✅ Login submitted.');
// })();





