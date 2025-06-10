import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Conectado ao Banco de Dados com sucesso")
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB
