const puppeteer = require("puppeteer");

const fetch_gs = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://gs25.gsretail.com/gscvs/ko/products/event-goods");
  await page.waitForSelector("ul.prod_list > li > .prod_box");
  const ehList = await page.$$("ul.prod_list > li > .prod_box");

  const prodList = [];
  let idx = 0;
  for (let eh of ehList) {
    prodList.push({
      idx: idx,
      name: await (
        await eh
      ).$eval("p.tit", (el) => {
        return el.innerText;
      }),
      price: await (
        await eh
      ).$eval("span.cost", (el) => {
        return el.innerText;
      }),
      img: await (
        await eh
      ).$eval(".img > img", (el) => {
        return el.getAttribute("src");
      }),
      etc: await (
        await eh
      ).$eval(".flg01 > span", (el) => {
        return el.innerText;
      }),
    });
    idx++;
  }
  await page.close();
  await browser.close();
  return prodList;
};

module.exports = { fetch_gs };
