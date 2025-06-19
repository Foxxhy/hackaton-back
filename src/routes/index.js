import express from "express";
import { generateReport } from "../controllers/reportController.js";
import { getDOM, getDOMByURL } from "../controllers/domController.js";
import {
  getTestDOM,
  testReadFile,
  testWriteFile,
  testMoveFile,
  testFileOperations,
  testDeepseek,
  testMistral,
} from "../controllers/testController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "route",
    status: "OK",
    // timestamp: new Date().toISOString(),
  });
});

router.post("/report", generateReport);

// router.get("/dom", getDOMByURL);
router.post("/dom", getDOM);

router.post("/test/dom", getTestDOM);
router.post("/test/read", testReadFile);
router.post("/test/write", testWriteFile);
router.post("/test/move", testMoveFile);
router.post("/test/file-operations", testFileOperations);
router.get("/test/deepseek", testDeepseek);
router.get("/test/mistral", testMistral);
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
