import { serviceOpenAI } from "../../services/llm/openApi.js";
import { getBasePrompt } from "../../configs/index.js";

export const imageController = async (req, res) => {
  console.log("image controller");
  const { meta, data, additional } = req.body;
  const feature2 = `
        "Exemple: image représentant un ..., representation d'un ..., illustration de ..., etc."

        Génère moi et corrige si nécessaire en langage naturel, le alt de l'image. 
        Si l'image n'apporte pas d'information réponds par un string vide.
        Tu es autorisé à aller sur internet pour trouver l'image. 
        Il est souhaitable d'expliciter le contenu de l'image.
        Renvoie moi un tableau de string avec les alt sans aucun élément supplémentaire ni espace.
  `;

  // const feature =
  //   "Génère moi en langage naturel, le résumé de la page web pour l'accessibilité en suivant cette structure: site de la page, principales pages accessibles et principales fonctionalités";

  const prompt = getBasePrompt(7, meta, data, feature2, additional);
  console.log("prompt", `${prompt}`);
  const response = await serviceOpenAI(prompt);
  res.json({ message: response });
};
