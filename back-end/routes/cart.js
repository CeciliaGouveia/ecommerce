import express from "express"
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/auth.js"
import Cart from "../models/Cart.js"

const router = express.Router()

// Create Cart Route
router.post("/", verifyToken, async (req, res) => {
  const body = req.body
  const newCart = new Cart(body)
  try {
    const savedCart = await newCart.save()

    res.status(200).json(savedCart)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor" })
  }
})

// Update Cart Route
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const body = req.body

  try {
    // req.params.id - é o id do produto passado na URL
    const updatedCart = await Cart.findByIdAndUpdate(
      // pegamos o ID passado na URL
      req.params.id,
      {
        // o set atualiza os dados no DB. Então, estamos falando para atualizar os dados no DB de acordo com os dados passados pelo usuário na requisição
        $set: body,
      },
      // Determinamos que seja retornado o registro atualizado já modificado e nao o antigo
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor , na Rota Put" })
  }
})

// Delete Cart Route
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Carrinho deletado com sucesso" })
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, na Rota Delete" })
  }
})

// Get User Cart Route
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const params = req.params
    const cart = await Cart.findOne({
      userId: params.userId,
    })

    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get")
  }
})

// Get All Carts Route
// Administrador conseguirá ver todos os carrinhos de todos os usuários
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()

    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor" })
  }
})

export default router
