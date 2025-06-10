import "dotenv/config"
import express from "express"
import connectDB from "./config/db.js"
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"
import cartRoutes from "./routes/cart.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())

connectDB()

app.use("/api/users", userRoutes)

app.use("/", productRoutes)

app.use("/", cartRoutes)

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor On")
})
