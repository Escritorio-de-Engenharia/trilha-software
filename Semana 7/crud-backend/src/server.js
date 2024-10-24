import express from "express"
import UserRoutes from "./routes/user.js"
const app = express()

app.use(express.json())
app.use("/users", UserRoutes)

const PORT = process.env.PORT || 3000

app.get("/status", (req, res) => {
    res.json({ status: "OK" })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})