const puppeteer = require("puppeteer");

const fetch_emart = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.emart24.co.kr/product/eventProduct.asp");
  await page.waitForSelector("ul.categoryListNew > li");
  const ehList = await page.$$("ul.categoryListNew > li");

  const prodList = [];
  let idx = 0;
  for (let eh of ehList) {
    prodList.push({
      idx: idx,
      name: await (
        await eh
      ).$eval(".box > .productDiv", (el) => {
        return el.innerText;
      }),
      price: await (
        await eh
      ).$eval(".box > .price", (el) => {
        return el.innerText;
      }),
      img: await (
        await eh
      ).$eval(".box > .productImg > img", (el) => {
        return "https://www.emart24.co.kr" + el.getAttribute("src");
      }),
      etc: await (
        await eh
      ).$eval("div > div > p > img", (el) => {
        return el.getAttribute("alt").replace(/ /g, "").substr(0, 3);
      }),
    });
    idx++;
  }
  await page.close();
  await browser.close();
  return prodList;
};

module.exports = { fetch_emart };
