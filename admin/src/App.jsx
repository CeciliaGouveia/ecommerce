import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import "./App.css"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}

export default App
