const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  console.log('Navigating to http://localhost:5173/ppt');
  await page.goto('http://localhost:5173/ppt');
  await page.waitForTimeout(2000);

  // Take screenshot of Slide 01
  await page.screenshot({ path: path.join(__dirname, 'public', 'ppt', 'test_slide01.png') });
  console.log('Took screenshot of Slide 01');

  // Go to next slide
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);

  // Take screenshot of Slide 02
  await page.screenshot({ path: path.join(__dirname, 'public', 'ppt', 'test_slide02.png') });
  console.log('Took screenshot of Slide 02');

  // Go to next slide
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(1000);

  // Take screenshot of Slide 03
  await page.screenshot({ path: path.join(__dirname, 'public', 'ppt', 'test_slide03.png') });
  console.log('Took screenshot of Slide 03');

  await browser.close();
  console.log('Done testing!');
})();
