import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export const verifyToken = (req, res, next) => {
  const tokenJwt =
    req.cookies.token || req.headers.authorization?.replace("Bearer ", "")

  if (tokenJwt) {
    jwt.verify(tokenJwt, JWT_SECRET, (err, user) => {
      // se retornar um erro, informa ao usuário
      if (err) return res.status(403).json("Token inválido")
      // se retornar uma resposta válida, guarda na requisição
      // guarda os dados do usuário (obtido no payload do token JWT) dentro da requisição (req) para que você possa acessar depois, em qualquer rota ou middleware seguinte.
      // "user" vem do payload passado no JWT quando utilizamos nosso método "sign"
      req.user = user
      next()
    })
  } else {
    return res.status(401).json("Você não está autenticado")
  }
}

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // req.user.id - é o id do usuário logado, que veio do token jwt da nossa função "verifyToken"
    // req.params.id - é o id do usuário passado na URL
    // Se o id do usuário logado é o mesmo passado na URL, então permitiremos acesso à página
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res
        .status(403)
        .json({ message: "Você não possui permissão para acessar essa página" })
    }
  })
}

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // req.user.id - é o id do usuário logado, que veio do token jwt da nossa função "verifyToken"
    // req.params.id - é o id do usuário passado na URL
    // Se o usuário logado for admin
    if (req.user.isAdmin) {
      next()
    } else {
      res
        .status(403)
        .json({ message: "Você não possui permissão para acessar essa página" })
    }
  })
}
