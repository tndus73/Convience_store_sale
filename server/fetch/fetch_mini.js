const puppeteer = require("puppeteer");

const fetch_mini = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.ministop.co.kr/MiniStopHomePage/page/event/plus1.do"
  );
  await page.waitForSelector(".event_plus_list > ul > li > a");
  const ehList = await page.$$(".event_plus_list > ul > li > a");

  const prodList = [];
  for (let eh of ehList) {
    prodList.push({
      name: await (
        await eh
      ).$eval("img", (el) => {
        return el.getAttribute("alt");
      }),
      price: await (
        await eh
      ).$eval("p > strong", (el) => {
        return el.innerText;
      }),
      img: await (
        await eh
      ).$eval("img", (el) => {
        return (
          "www.ministop.co.kr/MiniStopHomePage/page" +
          el.getAttribute("src").replace("..", "")
        );
      }),
      etc: await (
        await eh
      ).$eval("span", (el) => {
        return el.innerText;
      }),
    });
  }
  await page.close();
  await browser.close();
  return prodList;
};

module.exports = { fetch_mini };