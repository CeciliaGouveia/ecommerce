import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"
import cartRoutes from "./routes/cart.js"
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/order.js"
import stripeRoute from "./routes/stripe.js"

const app = express()

app.use(
  cors({
    // front-end
    origin: "http://localhost:5173",
    // disciplinando que aceita credenciais para utialização do cookie htmlOnly
    credentials: true,
  })
)

app.use(express.json())

app.use(cookieParser())

connectDB()

app.use("/api/users", userRoutes)

app.use("/api/products", productRoutes)

app.use("/api/carts", cartRoutes)

app.use("/api/orders", orderRoutes)

app.use("/api/auth", authRoutes)

app.use("/api/checkout", stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor On")
})
