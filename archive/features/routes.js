import { Router } from "express";
import { resumeController } from "./navigation/index.js";
import { llmController, healthController } from "./tests/index.js";
import { imageController } from "./patch/index.js";
const router = Router();

console.log("routes");

router.post("/navigation/resume", resumeController);
router.post("/patch/images", imageController);
router.get("/test/llm", llmController);
router.get("/test/health", healthController);

router.get("*", (req, res) => {
  res.json({ message: "not found" });
});

export const routes = router;
