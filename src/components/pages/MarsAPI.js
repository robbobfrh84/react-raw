import React from "react"
import API from "../../toolkit/API"
import Footer from "../Footer"

class MarsAPI extends React.Component {

  constructor(){
    super()
    this.state = {
      images: [],
      sol: 1000,
      page: 1,
      loading: false
    }
  }

  componentDidMount() {
    if (!API.BLOCK) this.searchMars(this.state.sol, this.state.page)
  }

  searchMars(sol, page) {
    this.setState({loading: true})
    API.photos(sol, page)
      .then(res => this.updateImages(res.data.photos))
      .catch(err => console.log(err))
      .finally( () => this.setState({loading: false}) )
  }

  updateImages(arr){
    this.setState({images: arr})
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  updateSearch = () => {
    this.searchMars(this.state.sol, this.state.page)
  }

  render(){
    return (
      <div>
        <h1>MarsAPI</h1>
        Sol: <input name="sol" value={this.state.sol}
          onChange={this.handleInputChange}
        /> &nbsp;
        Page: <input name="page" value={this.state.page}
          onChange={this.handleInputChange}
        />
        <button onClick={this.updateSearch} > Update </button>
        <br />

        {this.state.loading &&
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }

        {this.state.images.map( (img, i) => (
          <div key={i} style={{display: "inline-block", margin: 10}}>
            <div>{img.camera.full_name + " #" + img.id}</div>
            <img
              src={img.img_src}
              alt={img.camera.full_name}
              width="350px"
            />
            <br /><br />
          </div>
        ))}

        <Footer />

      </div>
    )
  }
}

export default MarsAPI
