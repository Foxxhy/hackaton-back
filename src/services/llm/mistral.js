const mistralUrl = "http://213.32.120.11:11434/api/chat"; // TO DEV

export const serviceMistral = async (
  prompt,
  model = "mistral-7b-instruct",
  stream = false
) => {
  const body = {
    model,
    stream,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const res = await fetch(mistralUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`HTTP ${res.status} – ${error}`);
    }

    const data = await res.json();
    return data.message.content; // réponse du modèle
  } catch (error) {
    console.error("❌ Erreur Mistral :", error.message);
    throw error;
  }
};
