import { Mistral } from "@mistralai/mistralai";

const apiKey = "";

const client = new Mistral({ apiKey });

export const serviceMistral = async (
  prompt,
  model = "mistral-large-latest"
) => {
  try {
    const response = await client.chat.complete({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    // Récupération du contenu de la réponse
    return response.choices[0].message.content;
  } catch (error) {
    console.error("❌ Erreur Mistral :", error.message);
    throw error;
  }
};
