import express from "express";
import cors from "cors";
import categoriesRouter from "./routes/categories";
import eventsRouter from "./routes/events";
import feedbacksRouter from "./routes/feedbacks";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/categories", categoriesRouter);
app.use("/events", eventsRouter);
app.use("/feedbacks", feedbacksRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

app.use(function (req, res) {
  res.status(404);
});
