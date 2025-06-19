import { serviceOpenAI } from "../services/llm/openApi.js";

export const generateReport = async (req, res) => {
  try {
    const { data, url } = req.body;

    // Validation des données d'entrée
    if (!data && !url) {
      return res.status(400).json({
        success: false,
        message:
          "Veuillez fournir soit un objet 'data' (contenant le DOM) soit une 'url'",
      });
    }

    let prompt = "";
    let content = "";

    if (data) {
      // Si on a un objet data contenant le DOM
      content = typeof data === "string" ? data : JSON.stringify(data);
      prompt = `Analyse le DOM suivant et génère un rapport détaillé :\n\n${content}`;
    } else if (url) {
      // Si on a une URL
      content = url;
      prompt = `Analyse le contenu de cette URL et génère un rapport détaillé : ${url}`;
    }

    // Appel du service LLM
    const report = await serviceOpenAI(prompt);

    res.json({
      success: true,
      message: "Rapport généré avec succès",
      data: {
        report,
        source: data ? "DOM" : "URL",
        content: content.substring(0, 100) + "...", // Aperçu du contenu source
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors de la génération du rapport :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la génération du rapport",
      error: error.message,
    });
  }
};
