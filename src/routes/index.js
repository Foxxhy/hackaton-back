import express from "express";
import { generateReport } from "../controllers/reportController.js";
import { getDOM, getDOMByURL } from "../controllers/domController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "route",
    status: "OK",
    // timestamp: new Date().toISOString(),
  });
});

router.post("/report", generateReport);

router.get("/dom", getDOMByURL);
router.post("/dom", getDOM);

router.get("/test", (req, res) => {
  res.json({
    message: "Test",
    status: "OK",
  });
});

router.get("*", (req, res) => {
  res.json({
    message: "Not found!",
    status: "404",
  });
});

export default router;
