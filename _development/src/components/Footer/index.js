import React from "react"
import { Link } from 'react-router-dom'

import "./style.css"
import { Card, Row, Col, Container, Button } from 'react-bootstrap'

class Footer extends React.Component {

  state = {
    date: "",
    page: window.location.pathname
  }

  componentDidMount(){
    this.setState({ date: new Date().getFullYear() })
    this.setFooterPosition()
  }

  componentDidUpdate(){
    this.setFooterPosition()
  }

  setFooterPosition(){ // Do some CRAZY stuff to keep footer in place for dynamic data-driven updates.
    const stickyFooter = document.getElementById("sticky-footer")
    stickyFooter.style.position = "fixed"
    const root = document.getElementById("root")
    if (window.innerHeight > root.clientHeight + stickyFooter.clientHeight) {
      stickyFooter.style.position = "fixed"
    } else {
      stickyFooter.style.position = "relative"
    }
  }

  render(){
    return (
      <div className="footer" style={this.state.style} id="sticky-footer">
        <Card className="text-center">

          <Container>
            <Row>

              <Col md={1}>
                <Link to="/home">
                  <Button variant="outline"> Home </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/notes">
                  <Button variant="outline"> Notes </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/marsAPI">
                  <Button variant="outline"> Mars API </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/full" className="full">
                  <Button variant="outline"> Full </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/home/about" className="full">
                  <Button variant="outline"> About </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/home/mars" className="full">
                  <Button variant="outline"> Mars </Button>
                </Link>
              </Col>

              <Col md={1}>
                <Link to="/home/more" className="full">
                  <Button variant="outline"> More </Button>
                </Link>
              </Col>

            </Row>
          </Container>
          <Card.Footer className="text-muted">&copy;{this.state.date} Pair Programmers</Card.Footer>
        </Card>

      </div>
    )
  }

}

export default Footer
