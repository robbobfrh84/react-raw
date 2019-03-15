import React from "react"
import API from "../../toolkit/API"
import Funcs from "../../toolkit/myfuncs"

import { Container, Row, Col } from "react-bootstrap"
import "./style.sass"

class InfoSpan extends React.Component {

  state = {
    load_totalPhotos: "d-flex",
    load_max_sol: "d-flex",
    load_status: "d-flex",
    load_launch_date: "d-flex",
    load_landing_date: "d-flex",
    load_max_date: "d-flex",
  }

  componentDidMount(){
    !API.BLOCK ? this.allPhotos("manifest") : this.turnAllLoadersOff()
  }

  allPhotos(which) {
    API[which]()
      .then(res => this.APIInfoSpan(which, res.data.rover) )
      .catch(err => { console.log(err) })
  }

  turnAllLoadersOff(){
    for (const s in this.state) this.setState({ [s]: "d-none" })
  }

  APIInfoSpan(which, data, convertNumber){
    let totalPhotos = data.total_photos.toString()
    let max_sol = data.max_sol.toString()
    totalPhotos = totalPhotos.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    max_sol = max_sol.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const toUpdate = {
      totalPhotos: totalPhotos || "?",
      max_sol: max_sol || "?",
      status: data.status || "?",
      launch_date: data.launch_date || "?",
      landing_date: data.landing_date || "?",
      max_date: data.max_date || "?"
    }

    for (const s in toUpdate) {
      setTimeout(()=>{
        this.setState({ ["load_"+s]: "d-none" })
        this.setState({
          [s]: toUpdate[s]
        })
      },Funcs.rand(500,1500))
    }

  }

  render() {
    return (
      <div className="InfoSpan">
        <h1> Mission Manifest </h1>
        <Container>
          <Row>
            <Col className="col3" md>
              <h3> Total Photos Taken: </h3>
              {this.state.totalPhotos &&
                <h1 className="value">{this.state.totalPhotos}</h1>
              }
              <div className={this.state.load_totalPhotos+" justify-content-center"}>
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
            <Col className="col3" md>
              <h3> Martian Days </h3>
              {this.state.max_sol &&
                <h1 className="value">{this.state.max_sol}</h1>
              }
              <div className={this.state.load_max_sol+" justify-content-center"}>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
            <Col className="col3" md>
              <h3> Rover Status </h3>
              {this.state.status &&
                <h1 className="value">"{this.state.status}"</h1>
              }
              <div className={this.state.load_status+" justify-content-center"}>
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col3" md>
              <h3> Launch Data </h3>
              {this.state.launch_date &&
                <h1 className="value">{this.state.launch_date}</h1>
              }
              <div className={this.state.load_launch_date+" justify-content-center"}>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
            <Col className="col3" md>
              <h3> Mars Landing </h3>
              {this.state.landing_date &&
                <h1 className="value">{this.state.landing_date}</h1>
              }
              <div className={this.state.load_landing_date+" justify-content-center"}>
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
            <Col className="col3" md>
              <h3> Last Updated </h3>
              {this.state.max_date &&
                <h1 className="value">{this.state.max_date}</h1>
              }
              <div className={this.state.load_max_date+" justify-content-center"}>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default InfoSpan
