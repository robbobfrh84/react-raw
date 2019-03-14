import React from "react"
import { Link, Route } from "react-router-dom"
import About from "../About"
import Mars from "../Mars"
import More from "../More"
import Footer from "../../Footer"
import InfoSpan from "../../InfoSpan"
import Rover from '../../../images/rover.svg'

import "./style.css"
import { Button, Row, Col, Container, Jumbotron } from 'react-bootstrap'

class Home extends React.Component {

  // constructor(props){
  //    super(props)
  //    this.state = {
  //       noteCount: this.props.rootData.pageData.notes.messageToChildren.length,
  //       page: this.props.match.url === "/" ? "/home" : this.props.match.url,
  //       path: window.location.pathname
  //    }
  //    this.scrollTopInfoBox = React.createRef();
  // }

  state = {
     noteCount: this.props.rootData.pageData.notes.messageToChildren.length,
     page: this.props.match.url === "/" ? "/home" : this.props.match.url,
     path: window.location.pathname,
     scrollTopInfoBox: React.createRef()
  }

  componentDidUpdatee(){
    console.log('updatee')
  }

  componentDidMount() {
    console.log(this.state.page, this.state.path)
    if (this.state.path !== '/home') {
      this.state.scrollTopInfoBox.current.scrollIntoView({ behavior: "smooth"})
    }
  }

  render() {
    return (
      <div className="home">

        <div className="imageContainer">
          <img src={Rover} alt="Rover" className="roverSVG"/>
        </div>

        <InfoSpan />

        <Jumbotron fluid>
          <Container>
            <h2> Total Human Notes: </h2>
            <h1> {this.state.noteCount} </h1>
          </Container>
        </Jumbotron>

        <Container className="subpage">
          <Row>

            <Col md={3}>
              <Link to={this.state.page+"/about"}>
                <Button variant="primary"
                  className={["/","/home","/home/about"].includes(this.state.path) ? "link current" : "link"}
                > About </Button>
              </Link>

              <Link to={this.state.page+"/mars"}>
                <Button variant="primary"
                  className={this.state.page+'/mars' === this.state.path ? "link current" : "link"}
                > Mars </Button>
              </Link>

              <Link to={this.state.page+"/more"}>
                <Button variant="primary"
                  className={this.state.page+'/more' === this.state.path ? "link current" : "link"}
                > More </Button>
              </Link>
            </Col>

            <Col md={9} className="subpage-content">
              <Route exact path="/(|home|home/about)/" component={About} />
              <Route exact path={this.state.page+'/mars'} component={Mars} />
              <Route exact path={this.state.page+'/more'} component={More} />
            </Col>

          </Row>
        </Container>

        <div ref={this.state.scrollTopInfoBox}></div>

        <Footer />

      </div>
    )
  }

}

export default Home






import React from "react"
import { Link, Route } from "react-router-dom"
import About from "../About"
import Mars from "../Mars"
import More from "../More"
import Footer from "../../Footer"
import InfoSpan from "../../InfoSpan"
import Rover from '../../../images/rover.svg'

import "./style.css"
import { Button, Tab, Row, Col, Container, Jumbotron } from 'react-bootstrap'

function Home({match, rootData}) {
  // class Home extends React.Component({match, rootData}) {
  // constructor(props) {
  //   // super(props)
  //   this.myRef = React.createRef()
  // }

  // state = {
  const noteCount = rootData.pageData.notes.messageToChildren.length
  const page = match.url === "/" ? "/home" : match.url
  const path = window.location.pathname
    // myRef: React.createRef()

  // handleScrollToElement(event) {
  //   console.log(this.state.page, this.state.path)
  //   // if (page !== "/" && "page/"){
  //   window.scrollTo(0, this.myRef.current.offsetTop);
  //   // }
  // }

  // render() {
    return (
      <div className="home">

        <div className="imageContainer">
          <img src={Rover} alt="Rover" className="roverSVG"/>
        </div>

        <InfoSpan />

        <Jumbotron fluid>
          <Container>
            <h2> Total Human Notes: </h2>
            <h1> {noteCount} </h1>
          </Container>
        </Jumbotron>

        <Container className="subpage">
          <Row>

            <Col md={3}>
              <Link to={page+"/about"}>
                <Button variant="primary"
                  className={["/","/home","/home/about"].includes(path) ? "link current" : "link"}
                > About </Button>
              </Link>

              <Link to={page+"/mars"}>
                <Button variant="primary"
                  className={page+'/mars' === path ? "link current" : "link"}
                > Mars </Button>
              </Link>

              <Link to={page+"/more"}>
                <Button variant="primary"
                  className={page+'/more' === path ? "link current" : "link"}
                > More </Button>
              </Link>
            </Col>

            <Col md={9} className="subpage-content">
              <Route exact path="/(|home|home/about)/" component={About} />
              <Route exact path={page+'/mars'} component={Mars} />
              <Route exact path={page+'/more'} component={More} />
            </Col>

          </Row>
        </Container>

        <Footer />

      </div>
    )

}

export default Home
