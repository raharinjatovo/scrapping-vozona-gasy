# Web Automation Script using Selenium (ChromeDriver) & Puppeteer

This project demonstrates how to automate interactions with a webpage using two popular Node.js libraries: **Selenium** (with ChromeDriver) and **Puppeteer**. The script performs the following tasks:

1. Navigates to a target URL.
2. Fills a `<textarea>` with specified text.
3. Clicks a button.
4. Extracts text from a specific child element.

You can choose to run the script with either **Selenium (using ChromeDriver)** or **Puppeteer**, depending on your preference.

## Table of Contents

- [Web Automation Script using Selenium (ChromeDriver) \& Puppeteer](#web-automation-script-using-selenium-chromedriver--puppeteer)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Installing Selenium (ChromeDriver)](#installing-selenium-chromedriver)

## Project Overview

This project demonstrates how to automate interactions with a webpage using **Selenium** (ChromeDriver) and **Puppeteer**, including:

1. **Navigating to a target URL**.
2. **Filling a `<textarea>`** with specified text.
3. **Clicking a button** with a specific class.
4. **Extracting text** from a child element inside a parent with specific classes.

Both **Selenium** and **Puppeteer** provide excellent tools for web automation, but Puppeteer tends to be faster and more focused on headless browser automation with modern web technologies.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher) - [Install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - Installed automatically with Node.js.

You will also need a working internet connection to install dependencies and run the scripts.

## Installation

### Installing Selenium (ChromeDriver)

To use **Selenium** (with **ChromeDriver**) for browser automation, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/selenium-puppeteer-automation.git
   cd selenium-puppeteer-automation

2. **Install Selenium Dependencies**:
    ```bash
    npm install
    ```
    or
    ```bash
    pnpm install
    ```
     or
    ```bash
    yarn install
    ```

3. **Usage**:
    1. **require dependencies**
    ```javascript
    const { Builder, By, until } = require('selenium-webdriver');
    require('chromedriver');
    ```
    2. **Create a new instance of the Chrome browser**:
    ```javascript
      let driver = await new Builder().forBrowser('chrome').build();

    ```
    3. **Navigate to the website you want to scrape**:
    
    


