const puppeteer = require('puppeteer');

async function insertTextAndExtractChildText() {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ headless: false });  // set `headless: true` for no GUI
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://vozonagasy.vercel.app/'); // Replace with your target URL

  // Insert text into the <textarea> with the placeholder "Entrez un texte à traduire"
  await page.waitForSelector('textarea[placeholder="Entrez un texte à traduire"]');  // Wait until the textarea is visible
  await page.type('textarea[placeholder="Entrez un texte à traduire"]', 'Hello, this is the text I want to translate!');  // Type into the textarea

  // Click the button with the class 'buttonSend'
  await page.waitForSelector('.buttonSend');  // Wait for the button to appear
  await page.click('.buttonSend');  // Click the button

  // Extract text from the element with class 'text-white-50' that is a child of 'mt-4 p-4 rounded'
  const extractedText = await page.$eval('.mt-4.p-4.rounded .text-white-50', element => element.innerText);

  // Output the extracted text
  console.log('Extracted text:', extractedText);

  // Close the browser after the task is complete
  await browser.close();
}

insertTextAndExtractChildText();
