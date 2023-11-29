const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
const PORT = 3000; // You can choose any available port

// Use CORS middleware
app.use(cors());

// Define a simple endpoint
app.get("/", (req, res) => {
  res.send("Welcome to my simple Node.js API!");
});

// Get Today Predictions
app.get("/today", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto("https://freewinningtips.com/");
    await page.waitForSelector(
      "#page-content-wrapper > div > div > div.row.mb-4 > div.col-lg-7 > table"
    );

    const elementHTML = await page.$eval(
      "#page-content-wrapper > div > div > div.row.mb-4 > div.col-lg-7 > table",
      (el) => el.outerHTML
    );

    await browser.close();

    res.send(elementHTML); // Send HTML as a response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error occurred");
  }
});

// Get Tommorrow Predictions
app.get("/tommorrow", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(
      "https://freewinningtips.com/tomorrows-free-football-predictions"
    );
    await page.waitForSelector(
      "#page-content-wrapper > div > div > div.row > div.col-lg-7 > table"
    );

    const elementHTML = await page.$eval(
      "#page-content-wrapper > div > div > div.row > div.col-lg-7 > table",
      (el) => el.outerHTML
    );

    await browser.close();

    res.send(elementHTML); // Send HTML as a response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error occurred");
  }
});

// Get Yesterday Predictions
app.get("/yesterday", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(
      "https://freewinningtips.com/yesterdays-free-football-predictions"
    );
    await page.waitForSelector(
      "#page-content-wrapper > div > div > div.row > div.col-lg-7 > table"
    );

    const elementHTML = await page.$eval(
      "#page-content-wrapper > div > div > div.row > div.col-lg-7 > table",
      (el) => el.outerHTML
    );

    await browser.close();

    res.send(elementHTML); // Send HTML as a response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error occurred");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
