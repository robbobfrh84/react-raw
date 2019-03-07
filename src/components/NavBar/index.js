import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function NavBar(props) {

  const page = window.location.pathname

  return (
    <div className="navBar">
      {props.title}
      <div className="right-nav">
        <button className={["/","/home"].includes(page) ? "link current" : "link"}>
          <Link to="/home"> Home </Link>
        </button>
        <button className={page === "/notes" ? "link current" : "link"}>
          <Link to="/notes"> Notes </Link>
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
