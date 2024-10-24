import express from "express";
import { EventsController } from "../controllers/EventsController";

const eventsRouter = express.Router();
const eventsController = new EventsController();

eventsRouter.get("/", async (req, res) => {
  const events = await eventsController.findAll();

  res.send(events);
});

eventsRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await eventsController.findOne(id);

  res.send(event);
});

eventsRouter.get("/:id/feedbacks", async (req, res) => {
  const id = parseInt(req.params.id);
  const feedbacks = await eventsController.findFeedbacks(id);

  res.send(feedbacks);
});

eventsRouter.post("/", async (req, res) => {
  const { title, description, date } = req.body;

  await eventsController.create({
    title,
    description,
    date,
  });

  res.send("Event created!");
});

eventsRouter.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, date } = req.body;

  eventsController.update({
    id,
    title,
    description,
    date,
  });

  res.send("Event updated!");
});

eventsRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  eventsController.delete(id);

  res.send("Event deleted!");
});

export default eventsRouter;
