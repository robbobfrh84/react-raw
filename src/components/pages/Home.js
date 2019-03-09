import React from "react"
import { Link } from "react-router-dom"
import About from "./About"
import More from "./More"
import "../../styles/navButtons.css"
import { Jumbotron, Button, Tab, Row, Col, Nav } from 'react-bootstrap'

function Home({match, rootData}) {

  const noteCount = rootData.pageData.notes.messageToChildren.length
  // const page = match.url === "/" ? "/home" : match.url
  // const path = window.location.pathname

  const emoji = {
    thumb: "👍"
  }

  return (
    <div className="navButtons">
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
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  More
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <About />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <More />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}

export default Home
