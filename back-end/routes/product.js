import express from "express"
import { verifyTokenAndAdmin } from "../middleware/auth.js"
import Product from "../models/Product.js"

const router = express.Router()

// Create Product Route
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const body = req.body
  const newProduct = new Product(body)
  try {
    const savedProduct = await newProduct.save()

    res.status(200).json(savedProduct)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor" })
  }
})

// Update Product Route
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  const body = req.body

  try {
    // req.params.id - é o id do produto passado na URL
    const updatedProduct = await Product.findByIdAndUpdate(
      // pegamos o ID passado na URL
      req.params.id,
      {
        // o set atualiza os dados no DB. Então, estamos falando para atualizar os dados no DB de acordo com os dados passados pelo usuário na requisição
        $set: body,
      },
      //   Determinamos que seja retornado o registro atualizado já modificado e nao o antigo
      { new: true }
    )
    res.status(200).json(updatedProduct)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor , na Rota Put" })
  }
})

// Delete Product Route
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Produto deletado com sucesso" })
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, na Rota Delete" })
  }
})

// Get Product Route
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get")
  }
})

// Get All Products Route
router.get("/", async (req, res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
      //$in é um operador de query que seleciona documentos onde o valor de um campo é igual a qualquer valor em um array especificado
      products = await Product.find({ categories: { $in: [qCategory] } })
    } else {
      products = await Product.find()
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get All")
  }
})

export default router
