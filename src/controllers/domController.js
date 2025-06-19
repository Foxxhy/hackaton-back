import { getRenderedDOM } from "../services/dom/playwright.js";

export const getDOM = async (req, res) => {
  try {
    console.log("getDOM", req.body);
    const { url } = req.body;

    // Validation de l'URL
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Veuillez fournir une URL dans le body de la requête",
      });
    }

    // Validation du format de l'URL
    try {
      new URL(url);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "L'URL fournie n'est pas valide",
      });
    }

    // Récupération du DOM via Puppeteer
    const dom = await getRenderedDOM(url);

    res.json({
      success: true,
      message: "DOM récupéré avec succès",
      data: {
        url,
        dom,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors de la récupération du DOM :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération du DOM",
      error: error.message,
    });
  }
};

export const getDOMByURL = async (req, res) => {
  try {
    const { url } = req.query;

    // Validation de l'URL
    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Veuillez fournir une URL en paramètre (ex: /dom?url=https://example.com)",
      });
    }

    // Validation du format de l'URL
    try {
      new URL(url);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "L'URL fournie n'est pas valide",
      });
    }

    // Récupération du DOM via Puppeteer
    const dom = await getRenderedDOM(url);

    res.json({
      success: true,
      message: "DOM récupéré avec succès",
      data: {
        url,
        dom,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors de la récupération du DOM :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération du DOM",
      error: error.message,
    });
  }
};
