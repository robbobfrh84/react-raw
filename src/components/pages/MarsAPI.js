import React from "react"
import API from "../../toolkit/API"

class MarsAPI extends React.Component {

  componentDidMount() {
    console.log('mounted')
    this.searchMars("cat")
  }

  searchMars = query => {
    API.search(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render(){
    return (
      <div>
        <h1>MarsAPI</h1>
        * See Console logs in developer tools...
      </div>

    )
  }
}

export default MarsAPI
