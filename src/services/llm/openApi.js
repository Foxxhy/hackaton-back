const apiKey = ""; // Remplace par ta clé OpenAI

const url = "https://api.openai.com/v1/chat/completions";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

export const serviceOpenAI = async (
  prompt,
  model = "gpt-4o-mini",
  store = true
) => {
  const body = {
    model,
    store,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: `${JSON.stringify(body)}`,
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`HTTP ${res.status} – ${error}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("❌ Erreur OpenAI :", error.message);
    throw error;
  }
};
