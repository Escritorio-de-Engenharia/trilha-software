import { users } from "../model/users.js";

export class UserController {
    findAll(req, res) {
        res.json(users)
    }

    findOne(req, res) {
        const { id } = req.params
        const user = users.find(user => user.id === Number(id))
        if (!user) {
            return res.status(404).json({ error: "User not found." })
        }
        res.json(user)
    }

    create(req, res) {
        const { name, email } = req.body
        users.push({
            id: users[users.length - 1].id + 1,
            name,
            email
        })
        res.status(201).json(users)
    }

    delete(req, res) {
        const { id } = req.params
        const userIndex = users.findIndex(user => user.id === Number(id))
        if (userIndex < 0) {
            return res.status(404).json({ error: "User not found." })
        }
        users.splice(userIndex, 1)
        res.status(204).send()
    }

    update(req, res) {
        const { id } = req.params
        const { name, email } = req.body
        const user = users.find(user => user.id === Number(id))
        if (!user) {
            return res.status(404).json({ error: "User not found." })
        }
        user.name = name
        user.email = email
        res.json(user)
    }
}