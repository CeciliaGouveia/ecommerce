import express from "express"
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/auth.js"
import User from "../models/User.js"
import { scryptSync } from "node:crypto"

const router = express.Router()

// Update User Route
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const body = req.body

  //   Se o put do usuário for para alterar a password, então a password novo deve ser encriptografada também
  if (body.password) {
    const salt = randomBytes(16).toString("hex")
    const hash = scryptSync(body.password, salt, 64).toString("hex")
    const passwordEncripted = `${salt}:${hash}`
    body.password = passwordEncripted
  }

  try {
    // req.params.id - é o id do usuário passado na URL
    const updatedUser = await User.findByIdAndUpdate(
      // pegamos o ID passado na URL
      req.params.id,
      {
        // o set atualiza os dados no DB. Então, estamos falando para atualizar os dados no DB de acordo com os dados passados pelo usuário na requisição
        $set: body,
      },
      //   Determinamos que seja retornado o registro atualizado já modificado e nao o antigo
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidorm , na Rota Put" })
  }
})

// Delete User Route
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Usuário deletado com sucesso" })
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, na Rota Delete" })
  }
})

// Get User Route
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc

    res.status(200).json(others)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get")
  }
})

// Get All Users Route
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find()

    res.status(200).json(users)
  } catch (err) {
    res.status(500).json("Erro no Servidor, na Rota Get All")
  }
})

// Get User Stats Route
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  // quero criar uma rota que o admin consiga ver quantos novos usuários tem no mês
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      {
        // _id significa "critério de agrupamento". Nesse contexto estou dizendo "agrupe os documentos por mês" É como se fosse uma chave de agrupamento. Ex: todos os documentos com month 6 vao junto, com month 7 vao juntos etc"
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ])
    res.status(200).json(data)
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro no Servidor, na Rota Get User Stats" })
  }
})

export default router
