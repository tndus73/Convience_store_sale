const puppeteer = require("puppeteer");

const fetch_seven = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.7-eleven.co.kr/product/presentList.asp");
  await page.waitForSelector("ul#listUl > li > .pic_product");
  const ehList = await page.$$("ul#listUl > li > .pic_product");
  const oneplus = await page.$("ul#listUl > li");

  const prodList = [];
  for (let eh of ehList) {
    prodList.push({
      name: await (
        await eh
      ).$eval(".infowrap > .name", (el) => {
        return el.innerText;
      }),
      price: await (
        await eh
      ).$eval(".infowrap > .price > span", (el) => {
        return el.innerText;
      }),
      img: await (
        await eh
      ).$eval("img", (el) => {
        return "https://www.7-eleven.co.kr" + el.getAttribute("src");
      }),
      etc: await oneplus.$eval("span", (el) => el.innerText),
    });
  }
  await page.close();
  await browser.close();
  return prodList;
};

module.exports = { fetch_seven };
