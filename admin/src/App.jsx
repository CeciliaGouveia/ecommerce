import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import "./App.css"
import Home from "./pages/Home"
import UserList from "./pages/userList"
import User from "./pages/User"
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
