import React from "react"
import "./styles.css"
import { login } from "../../app/apiCalls.js"
import { useDispatch } from "react-redux"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const dispatch = useDispatch()

  const handleClick = async (event) => {
    event.preventDefault()
    login(dispatch, { email, password })
  }

  return (
    <div className="login">
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
