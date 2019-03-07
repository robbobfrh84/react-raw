import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

/* styles */
import "./style.css"

/* navBar pages */
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home"
import Notes from "./components/pages/Notes"

/* Full pages */
import Full from "./components/pages/Notes"

function App() {

  const pages = {
    title: "React-Raw"
  }

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavBar title={pages.title}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={Notes} />
        </div>
        <div>
          <Route exact path="/full" component={Full} />
        </div>
      </div>
    </BrowserRouter>
  )
  
}

export default App
