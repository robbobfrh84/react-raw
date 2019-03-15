import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Data from "./static.json"

/* styles */
import "./styles/main.sass"

/* navBar pages */
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home"
import Notes from "./components/pages/Notes"
import MarsAPI from "./components/pages/MarsAPI"
import Default from "./components/pages/Default"

/* Full pages */
import Full from "./components/pages/Full"

class App extends React.Component {

  state = {
    title: Data.title,
    pageData: Data.pageData,
    updatePageData: ((page,data)=>this.doUpdatePageData(page,data))
  }

  doUpdatePageData(page, data) {
    const obj = {...this.state.pageData}
    obj[page] = data
    this.setState({pageData: obj})
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/full" component={Full} />
          <Route path="/" render={() => <NavPages rootData={this.state} />} />
        </Switch>
      </BrowserRouter>
    )
  }

}

function NavPages(props) {

  return (
    <div>
      <NavBar title={props.rootData.title}/>
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route} rootData={props.rootData}/>}
        />
        <Route exact path="/notes"
          render={route => <Notes {...route} rootData={props.rootData}/>}
        />
        <Route exact path="/marsapi"
          render={route => <MarsAPI {...route} rootData={props.rootData}/>}
        />
        <Route path="*" component={Default} />
      </Switch>
    </div>
  )
}

export default App
