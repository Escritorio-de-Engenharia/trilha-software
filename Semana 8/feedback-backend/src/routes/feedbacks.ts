import express from "express";
import { FeedbacksController } from "../controllers/FeedbacksController";

const feedbacksRouter = express.Router();
const feedbacksController = new FeedbacksController();

feedbacksRouter.get("/", async (req, res) => {
  const feedbacks = await feedbacksController.findAll();

  res.send(feedbacks);
});

feedbacksRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const feedback = await feedbacksController.findOne(id);

  res.send(feedback);
});

feedbacksRouter.post("/", async (req, res) => {
  const { category_id, comment, event_id, name } = req.body;

  await feedbacksController.create({ category_id, comment, event_id, name });

  res.send("Feedback created!");
});

feedbacksRouter.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { category_id, comment, event_id, name } = req.body;

  await feedbacksController.update({
    id,
    category_id,
    comment,
    event_id,
    name,
  });

  res.send("Feedback updated!");
});

feedbacksRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await feedbacksController.delete(id);

  res.send("Feedback deleted!");
});

export default feedbacksRouter;
