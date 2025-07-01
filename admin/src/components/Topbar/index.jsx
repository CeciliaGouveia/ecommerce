import React from "react"
import "./styles.css"
import { NotificationsNone, Language, Settings } from "@mui/icons-material"
import { Link } from "react-router-dom"
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <h1 className="logo">C's clothes</h1>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar
