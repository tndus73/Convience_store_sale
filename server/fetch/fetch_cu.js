const puppeteer = require("puppeteer");

const fetch_cu = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "http://cu.bgfretail.com/event/plus.do?category=event&depth2=1&sf=N"
  );

  await page.waitForSelector("div.prodListWrap > ul > li");
  const ehList = await page.$$("div.prodListWrap > ul > li");
  const prodList = [];
  let idx = 0;
  for (let eh of ehList) {
    prodList.push({
      idx: idx,
      name: await (
        await eh
      ).$eval("p.prodName > a", (el) => {
        return el.innerText;
      }),
      price: await (
        await eh
      ).$eval("p.prodPrice > span", (el) => {
        return el.innerText;
      }),
      img: await (
        await eh
      ).$eval(".photo > a > img", (el) => {
        return el.getAttribute("src");
      }),
      etc: await (
        await eh
      ).$eval("ul > li", (el) => {
        return el.innerText;
      }),
    });
    idx++;
  }
  await page.close();
  await browser.close();
  return prodList;
};

// fetch_cu();

module.exports = { fetch_cu };
