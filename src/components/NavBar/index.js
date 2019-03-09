import React from "react"
import { Link } from "react-router-dom"
import "../../styles/navButtons.css"
import "./style.css"

function NavBar(props) {

  const page = window.location.pathname

  return (
    <div className="navBar navButtons">
      <Link to="/"> {props.title} </Link>
      <div className="right-nav">
        <button className={["/","/home"].includes(page) ? "link current" : "link"}>
          <Link to="/home"> Home </Link>
        </button>
        <button className={page === "/notes" ? "link current" : "link"}>
          <Link to="/notes"> Notes </Link>
        </button>
        <button className={page === "/marsapi" ? "link current" : "link"}>
          <Link to="/marsapi"> Mars API </Link>
        </button>
        <button className={page === "/full" ? "link current" : "link"}>
          <Link to="/full"> Full </Link>
        </button>
      </div>
      <hr />
    </div>
  )
}

export default NavBar
