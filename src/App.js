import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

/* styles */
import "./styles/main.css"

/* navBar pages */
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home"
import Notes from "./components/pages/Notes"
import MarsAPI from "./components/pages/MarsAPI"
import Default from "./components/pages/Default"

/* Full pages */
import Full from "./components/pages/Full"

function App() {
  const pages = {
    title: "React-Raw"
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/full" component={Full} />
        <Route path="/" render={() => <NavPages pages={pages} />} />
      </Switch>
    </BrowserRouter>
  )
}

function NavPages(props) {
  return (
    <div>
      <NavBar title={props.pages.title}/>
      <Switch>
        <Route path="/(|home|landing)/" component={Home} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/marsAPI" component={MarsAPI} />
        <Route path="*" component={Default} />
      </Switch>
    </div>
  )
}

export default App
