import React from "react"
import { Link, Route } from "react-router-dom"
import About from "../About"
import More from "../More"
import "./style.css"
import { Jumbotron, Button, Tab, Row, Col } from 'react-bootstrap'

function Home({match, rootData}) {

  const noteCount = rootData.pageData.notes.messageToChildren.length
  const page = match.url === "/" ? "/home" : match.url
  const path = window.location.pathname

  const emoji = {
    thumb: "👍"
  }

  return (
    <div className="home">
      <Jumbotron>
        <h1> Home Page: with Bootstrap Jumbotron </h1>
        <h3> Total Notes: {noteCount} </h3>
        <p>
          And, of course we've got some fun filler text that really doesn't do or say anything.
          But, as long as you don't read it, it looks like it's important, or looks like it could be important.
          So, if you're still reading this I really don't know why.
          You probably should have stopped by now. Ok, maybe that was a bit judgemental, maybe you have a good reason,
          maybe it's just that you like reading. that's cool. {emoji.thumb}
        </p>
        <p>
          <Link to={'/notes'}>
            <Button variant="primary"> Notes </Button>
          </Link>
          <Link to={'/marsapi'}>
            <Button variant="primary"> Mars API </Button>
          </Link>
        </p>
      </Jumbotron>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>

            <Link to={page+"/about"}>
              <Button variant="primary"
                className={["/","/home","/home/about"].includes(path) ? "link current" : "link"}
              > About </Button>
            </Link>


            <Link to={page+"/more"}>
              <Button variant="primary"
                className={page+'/more' === path ? "link current" : "link"}
              > More </Button>
            </Link>

          </Col>
          <Col sm={9} className="subpage-content">

            <Route exact path="/(|home|home/about)/" component={About} />
            <Route exact path={page+'/more'} component={More} />

          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}

export default Home
