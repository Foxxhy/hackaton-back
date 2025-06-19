import puppeteer from "puppeteer";

export const getRenderedDOM = async (
  url,
  options = { waitUntil: "networkidle0", timeout: 30000 }
) => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, options);

    const content = await page.content(); // récupère le DOM complet
    return content;
  } catch (error) {
    console.error("❌ Erreur Puppeteer :", error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
