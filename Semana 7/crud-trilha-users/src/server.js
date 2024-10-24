import express from "express"
import router from "./routes/users.js"

const app = express()

const PORT = process.env.PORT || 3333

app.use(express.json())
app.use("/users", router)

app.get("/status", (req, res) => {
    res.send({ status: "Nuvem" })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})