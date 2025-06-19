import { getRenderedDOM } from "../services/dom/playwright.js";

export const getTestDOM = async (req, res) => {
  try {
    const url = "https://www.youtube.com/";

    // Récupération du DOM via Puppeteer
    const dom = await getRenderedDOM(url);

    res.json({
      success: true,
      message: "DOM de La Poste récupéré avec succès",
      data: {
        url,
        dom,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(
      "❌ Erreur lors de la récupération du DOM de La Poste :",
      error
    );
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération du DOM de La Poste",
      error: error.message,
    });
  }
};
