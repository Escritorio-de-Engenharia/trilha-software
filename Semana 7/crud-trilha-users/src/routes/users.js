import express from "express"
import { UsersController } from "../controllers/UsersController.js"

const router = express.Router()

const usersController = new UsersController()

router.get("/", (req, res) => {
    const users = usersController.findAll()
    res.send(users)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const user = usersController.findOne(Number(id))
    res.send(user)
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    const users = usersController.delete(Number(id))
    res.send(users)
})

router.post("/", (req, res) => {
    const user = req.body
    const newUser = usersController.create(user)
    res.send(newUser)
})

router.patch("/:id", (req, res) => {
    const { id } = req.params
    const user = req.body
    const newUser = usersController.update(Number(id), user)
    res.send(newUser)
})

export default router