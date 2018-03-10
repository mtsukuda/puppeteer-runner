const fs = require('fs');
const puppeteer = require('puppeteer');
const savedImagePath = 'ss_images';
(async () => {
    const browser = await puppeteer.launch();
if (!fs.existsSync(savedImagePath)){
    fs.mkdirSync(savedImagePath);
}
const page = await browser.newPage();
await page.goto('https://www.dmm.co.jp/top/');
await page.screenshot({path: savedImagePath + '/dmm.png'});

await browser.close();
})();