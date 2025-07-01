import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import "./App.css"
import Home from "./pages/Home"
import UserList from "./pages/userList"
import User from "./pages/User"
import NewUser from "./pages/NewUser"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import NewProduct from "./pages/NewProduct"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
