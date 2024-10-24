import express from "express";
import { UserController } from "../controllers/UserController.js";

const router = express.Router()

const userController = new UserController()

router.get("/", userController.findAll)
router.post("/", userController.create)
router.delete("/:id", userController.delete)
router.put("/:id", userController.update)
router.get("/:id", userController.findOne)

export default router