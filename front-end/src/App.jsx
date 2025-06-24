import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        {/* As rotas que passamos no "path" nao precisam ser as mesmas do back-end */}
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
