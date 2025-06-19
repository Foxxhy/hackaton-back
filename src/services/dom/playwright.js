import { chromium } from "playwright";

/**
 * Récupère le DOM complet (HTML) d'une page après chargement complet (JS compris)
 * @param {string} url - L'URL de la page à visiter
 * @param {object} options - Options de navigation Playwright
 * @returns {Promise<string>} Le HTML complet de la page après rendu
 */
export const getRenderedDOM = async (
  url,
  options = { waitUntil: "networkidle", timeout: 30000 }
) => {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url, options);

    const content = await page.content();
    return content;
  } catch (error) {
    console.error("❌ Erreur Playwright :", error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
