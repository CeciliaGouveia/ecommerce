import React from "react"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import { axiosPrivate } from "./api/axios.js"
import { useDispatch } from "react-redux"
import { loginSuccess } from "./app/userRedux.js"

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosPrivate.get("/users/admin") // essa rota retorna isAdmin
        dispatch(loginSuccess(res.data))
      } catch (err) {
        console.log("Usuário não autenticado", err)
      }
    }

    fetchUser()
  }, [])

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
