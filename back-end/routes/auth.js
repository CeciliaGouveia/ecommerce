import express from "express"
import User from "../models/User.js"
import { scryptSync, randomBytes } from "node:crypto"
import jwt from "jsonwebtoken"

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

// Rota de Cadastro
router.post("/register", async (req, res) => {
  try {
    const body = req.body

    const salt = randomBytes(16).toString("hex")

    const hash = scryptSync(body.password, salt, 64).toString("hex")

    const passwordEncripted = `${salt}:${hash}`

    // criando um objeto do nosso modelo User
    const newUser = new User({
      username: body.username,
      email: body.email,
      password: passwordEncripted,
    })

    if (!newUser) {
      return res.status(401).json({ message: "Dados de usuário inválidos" })
    }

    // salvando os dados do objeto no banco de dados
    const savedUser = await newUser.save()

    // remove a senha da resposta
    const { password, ...others } = savedUser._doc

    res.status(201).json(others)
  } catch (err) {
    res.status(500).json({ message: "Erro ao cadastrar usuário" })
  }
})

// Rota de Login
router.post("/login", async (req, res) => {
  const body = req.body
  try {
    const userDataBase = await User.findOne({
      email: body.email,
    })

    if (!userDataBase) {
      return res.status(401).json({ message: "Usuário não encontrado" })
    }

    // extrai o salt e o hash salvos no banco de dados e grava-os em variáveis distintas
    const [saltDatabase, hashDatabase] = userDataBase.password.split(":")

    // gerando hash da senha digitada, utilizando o salt salvo no banco de dados
    const passwordLogin = body.password

    const hashPasswordLogin = scryptSync(
      passwordLogin,
      saltDatabase,
      64
    ).toString("hex")

    const isMatch = hashPasswordLogin === hashDatabase

    if (!isMatch) {
      return res.status(401).json({ message: "Senha inválida" })
    }

    const token = jwt.sign(
      { id: userDataBase.id, isAdmin: userDataBase.isAdmin },
      JWT_SECRET,
      {
        expiresIn: "3d",
      }
    )

    // Vamos omitir a senha, da resposta qeu formos dar para o usuário
    const { password, ...others } = userDataBase._doc

    // retornando o cookie para utialização do cookie htmlOnly
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // só HTTPS em produção
        sameSite: "Strict", // ou "Lax"
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 dias
      })
      .status(200)
      .json({ ...others })
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor" })
  }
})

export default router
