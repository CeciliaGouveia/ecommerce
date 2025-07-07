import React from "react"
import { useLocation, Routes, Route } from "react-router-dom"
import Topbar from "../Topbar"
import Sidebar from "../Sidebar"
import Home from "../../pages/Home"
import UserList from "../../pages/userList"
import User from "../../pages/User"
import NewUser from "../../pages/NewUser"
import ProductList from "../../pages/ProductList"
import Product from "../../pages/Product"
import NewProduct from "../../pages/NewProduct"
import Login from "../../pages/Login"
import NotAuthorized from "../../pages/NotAuthorized"
import ProtectedAdminRoute from "../ProtectedAdminRoute"

const Layout = () => {
  const location = useLocation()
  //   guardamos nossa página de login e sua rota numa variável
  const isLoginPage = location.pathname === "/login"

  return (
    <>
      {/* determinamos que, se a rota for qualquer uma diferente de "/login", será exibido o Topbar */}
      {!isLoginPage && <Topbar />}
      <div className="container">
        {/* determinamos que, se a rota for qualquer uma diferente de "/login", será exibido o Sidebar */}
        {!isLoginPage && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />

          <Route
            path="/"
            element={
              <ProtectedAdminRoute>
                <Home />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedAdminRoute>
                <UserList />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <ProtectedAdminRoute>
                <User />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/newUser"
            element={
              <ProtectedAdminRoute>
                <NewUser />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedAdminRoute>
                <ProductList />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProtectedAdminRoute>
                <Product />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/newProduct"
            element={
              <ProtectedAdminRoute>
                <NewProduct />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default Layout
