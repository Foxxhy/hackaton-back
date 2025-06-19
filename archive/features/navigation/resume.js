import { serviceOpenAI } from "../../services/llm/openApi.js";
import { getBasePrompt } from "../../configs/index.js";

export const resumeController = async (req, res) => {
  console.log("llm controller");
  const { meta, data, additional } = req.body;
  const feature2 = `
    Génère moi en langage naturel, le résumé de la page web pour l'accessibilité en suivant cette structure:
    site de la page, principales pages accessibles et principales fonctionalités

    Par exemple: "Vous êtes sur le site de ... où il est consulter les ... et d'effectuer les ....
  `;

  // const feature =
  //   "Génère moi en langage naturel, le résumé de la page web pour l'accessibilité en suivant cette structure: site de la page, principales pages accessibles et principales fonctionalités";

  const prompt = getBasePrompt(50, meta, data, feature2, additional);
  console.log("prompt", `${prompt}`);
  const response = await serviceOpenAI(prompt);
  res.json({ message: response });
};
