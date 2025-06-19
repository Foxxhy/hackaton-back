import { serviceOpenAI } from "../../services/llm/openApi.js";

export const llmController = async (req, res) => {
  console.log("llm controller");
  const response = await serviceOpenAI("Hello, how are you?");
  res.json({ message: response });
};
