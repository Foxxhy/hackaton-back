import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "route",
    status: "OK",
    // timestamp: new Date().toISOString(),
  });
});

router.get("/test", (req, res) => {
  res.json({
    message: "Route de test fonctionnelle",
    data: {
      user: "API Hackaton",
      version: "1.0.0",
    },
  });
});

router.get("*", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API Hackaton Backend!",
    status: "OK",
  });
});

export default router;
