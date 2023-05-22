import express from "express";
import * as DiaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(DiaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Adding entry diary");
});

export default router;
