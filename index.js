const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function scrapeExample() {
  // Create a new instance of the Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website you want to scrape
    await driver.get('https://vozonagasy.vercel.app/');

    // Wait for the page to load and for a specific element to be present
    await driver.wait(until.elementLocated(By.tagName('h1')), 10000);

    // Wait for the page to load and for the <textarea> with the specific placeholder to be available
    await driver.wait(until.elementLocated(By.css('textarea[placeholder="Entrez un texte à traduire"]')), 10000);

    // Locate the <textarea> by its placeholder attribute
    const textarea = await driver.findElement(By.css('textarea[placeholder="Entrez un texte à traduire"]'));
    
    // Clear the textarea (optional, in case there is already text in it)
    await textarea.clear();

    // Insert text into the textarea
    await textarea.sendKeys('Hello, this is the text I want to translate!');
    // Wait for the button with class 'buttonSend' to be available
    const buttonSend = await driver.wait(until.elementLocated(By.className('buttonSend')), 10000);

    // Click the button to submit or trigger the action
    await buttonSend.click();

     // Wait for the child element with class 'text-white-50' inside 'mt-4 p-4 rounded' to be present
     const textElement = await driver.wait(
        until.elementLocated(By.css('.mt-4.p-4.rounded .text-white-50')), 10000
     );
  
      // Extract the text from the element
      const extractedText = await textElement.getText();
      console.log('Extracted text:', extractedText);
  
      // Optional: wait a moment to see the action performed
      await driver.sleep(2000);  // Sleep for 2 seconds for visualization
   
    // You can add more scraping logic for other elements
   
    
  } catch (error) {
    console.log('Error occurred:', error);
  } finally {
    // Close the browser after the operation
    await driver.quit();
  }
}

scrapeExample();
