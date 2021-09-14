import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <button className="header_name">
            <b>Yang</b> Ye Lun
          </button>
        </Link>
        <div className="header_selection">
          <Link to="/contact">
            <button className="header_selection_option">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header