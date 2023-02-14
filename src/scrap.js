const puppeteer = require('puppeteer-extra');
const hidden = require('puppeteer-extra-plugin-stealth')
const {executablePath} = require('puppeteer')
const {PuppeteerExtraPluginRecaptcha} = require("puppeteer-extra-plugin-recaptcha");

puppeteer.use(
    new PuppeteerExtraPluginRecaptcha({
        provider: {id: 'data', token: '6LdtwcsgAAAAAHYuReBjhiIUT5L-s50lgoNDlRVq'}
    })
)

async function getData(url) {

    puppeteer.use(hidden())
    const browser = await puppeteer.launch({
        args: ['--no-sandbox',],
        headless: false,
        ignoreHTTPSErrors: true,
        executablePath: executablePath(),
    })

    const page = await browser.newPage()

    // go to page
    await page.goto(url, {
        waitUntil: 'networkidle0',
    });
    //solve captcha
    await page.solveRecaptchas();
    //get data
    const searchValue = await page.$eval('#data', el => el.outerText);
    //parse data
    const result = await JSON.parse(searchValue);

    await browser.close();
    return result.sign
}

module.exports = { getData }
