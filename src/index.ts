import express from "express";

//routes
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 4000;

app.get("/ping", (_req, res) => {
  console.log("someone piged here");
  res.send("pong!");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
