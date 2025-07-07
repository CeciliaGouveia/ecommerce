import express from "express"
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/auth.js"
import Order from "../models/Order.js"

const router = express.Router()

// Create Order Route
router.post("/", verifyToken, async (req, res) => {
  const body = req.body
  const newOrder = new Order(body)
  try {
    const savedOrder = await newOrder.save()

    res.status(200).json(savedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update Order Route
// Administrador poderá alterar o pedido já realizado
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  const body = req.body

  try {
    // req.params.id - é o id do produto passado na URL
    const updatedOrder = await Order.findByIdAndUpdate(
      // pegamos o ID passado na URL
      req.params.id,
      {
        // o set atualiza os dados no DB. Então, estamos falando para atualizar os dados no DB de acordo com os dados passados pelo usuário na requisição
        $set: body,
      },
      // Determinamos que seja retornado o registro atualizado já modificado e nao o antigo
      { new: true }
    )
    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor , na Rota Put" })
  }
})

// Delete Order Route
// Administrador poderá deletar um pedido
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Pedido deletado com sucesso" })
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, na Rota Delete" })
  }
})

// Get User Orders Route
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const params = req.params
    const orders = await Order.find({
      userId: params.userId,
    })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get")
  }
})

// Get All Orders Route
// Administrador conseguirá ver todos os pedidos de todos os usuários
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find()

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, na Rota Get All" })
  }
})

// Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid
  // quero criar uma rota que o admin consiga ver quantos novos usuários tem no mês
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      //   pegamos os campos "$createdAt" e "$amount" criados no model Order e processamos ela na maneira declarado no project
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      {
        // _id significa "critério de agrupamento". Nesse contexto estou dizendo "agrupe os documentos por mês. É como se fosse uma chave de agrupamento. Ex: todos os documentos com month 6 vao junto, com month 7 vao juntos etc"
        $group: { _id: "$month", total: { $sum: "$sales" } },
      },
    ])
    res.status(200).json(income)
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro no Servidor, na Rota Get User Stats" })
  }
})

export default router
