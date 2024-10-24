import express from "express";
import { CategoriesController } from "../controllers/CategoriesController";

const categoriesRouter = express.Router();
const categoriesController = new CategoriesController();

categoriesRouter.get("/", async (req, res) => {
  const categories = await categoriesController.findAll();

  console.log(categories);

  res.send(categories);
});

categoriesRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const category = await categoriesController.findOne(id);

  res.send(category);
});

categoriesRouter.post("/", async (req, res) => {
  const { name } = req.body;

  await categoriesController.create({
    name,
  });

  res.send("Category created!");
});

categoriesRouter.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  await categoriesController.update({
    id,
    name,
  });

  res.send("Category updated!");
});

categoriesRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await categoriesController.delete(id);

  res.send("Category deleted!");
});

export default categoriesRouter;
