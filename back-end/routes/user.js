import express from "express"
import { verifyToken, verifyTokenAndAuthorization } from "../middleware/auth.js"
import User from "../models/User.js"
import { scryptSync } from "node:crypto"

const router = express.Router()

// Update Route
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
      req.params.id,
      {
        // o set atualiza os dados no DB. Então, estamos falando para atualizar os dados no DB de acordo com os dados passados pelo usuário na requisição
        $set: body,
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor" })
  }
})

export default router
