import React from "react"
import { Link } from "react-router-dom"
import "./style.sass"
import { Navbar, Nav, Button } from 'react-bootstrap'

function NavBar(props) {

  const page = window.location.pathname

  return (
    <Navbar collapseOnSelect expand="lg" className="navButtons">
      <Navbar.Brand>
        <Link to="/" className="title"> {props.title} </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/home"
            className={page === "/home" ? "link current" : "link"}
          > Home </Link>
          <Link to="/notes"
            className={page === "/notes" ? "link current" : "link"}
          > Notes </Link>
          <Link to="/marsapi"
            className={page === "/marsapi" ? "link current" : "link"}
          > Mars API </Link>
          <Link to="/full" className="full">
            <Button variant="outline-primary"> Full </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default NavBar
