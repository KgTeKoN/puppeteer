const { inputWebsite } = require('./src/getArg');
const { getData } = require('./src/scrap')
const { URL } = require('./config');

async function scraping() {
    const website = inputWebsite() || URL;
    console.log(await getData(website))
};

scraping();
