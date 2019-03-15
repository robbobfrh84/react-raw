import React from "react"
import API from "../../toolkit/API"

class MarsAPI extends React.Component {

  constructor(){
    super()
    this.state = {
      images: [],
      sol: 1000,
      page: 1,
    }
    this.loading = false
  }

  componentDidMount() {
    this.searchMars(this.state.sol, this.state.page)
  }

  searchMars(sol, page) {
    this.loading = true
    API.search(sol, page)
      .then(res => this.updateImages(res.data.photos))
      .catch(err => console.log(err))
      .finally( () => this.loading = false )
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

        {!this.loading &&
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
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

      </div>
    )
  }
}

export default MarsAPI
