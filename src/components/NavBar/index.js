import React from "react"
import "./style.css"

function NavBar(props) {
  return (
    <div className="navBar">
      {props.title}
      <div className="right-nav">
        <button> Home </button>
        <button> Notes </button>
        <button> Full </button>
      </div>
      <hr />
    </div>
  )
}

export default NavBar
