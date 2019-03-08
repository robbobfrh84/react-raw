import React from "react"
import { Link, Route } from "react-router-dom"
import About from "./About"
import More from "./More"
import "../../styles/navButtons.css"

function Home({match, rootData}) {

  const noteCount = rootData.pageData.notes.messageToChildren.length
  const page = match.url === "/" ? "/home" : match.url
  const path = window.location.pathname

  return (
    <div className="navButtons">
      <h1> Home Page </h1>
      <div> Total Notes: {noteCount} </div> <br />
      <button className={path === page+'/about' ? "link current" : "link"}>
        <Link to={page+'/about'}> About </Link>
      </button>
      <button className={path === page+'/more' ? "link current" : "link"}>
        <Link to={page+'/more'}> More </Link>
      </button>
      <Route exact path={page+'/about'} component={About} />
      <Route exact path={page+'/more'} component={More} />
    </div>
  )
}

export default Home
