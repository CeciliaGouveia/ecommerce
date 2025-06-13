import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"
import cartRoutes from "./routes/cart.js"
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/order.js"

const app = express()

app.use(cors())

app.use(express.json())

connectDB()

app.use("/api/users", userRoutes)

app.use("/api/products", productRoutes)

app.use("/api/carts", cartRoutes)

app.use("/api/orders", orderRoutes)

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor On")
})
