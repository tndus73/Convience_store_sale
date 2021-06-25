const puppeteer = require("puppeteer");

const gs = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://gs25.gsretail.com/gscvs/ko/products/event-goods");
  await page.waitForSelector("ul.prod_list > .prod_box");
  const ehList = await page.$$("ul.prod_list > .prod_box");

  const prodList = [];
  for (let eh of ehList) {
    prodList.push({
      name: await (
        await eh
      ).$eval(".tit", (el) => {
        return el.innerText;
      }),
      price: await (
        await eh
      ).$eval(".cost", (el) => {
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
      comp: "gs",
    });
  }

  await browser.close();
};

gs();

export default fetch_gs;
