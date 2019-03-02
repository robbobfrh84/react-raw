import React from "react"
import "./style.css"

class Form extends React.Component {

  state = {
    input: "",
  }

  handleInputChange = event => this.setState({ input: event.target.value })

  handleInputSubmit = event => {
    event.preventDefault()
    this.props.addNote(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
      <div className="form">
        <form>
          <input
            id="input"
            onChange={this.handleInputChange}
            placeholder=" enter note..."
            value={this.state.input}
            autoFocus
          />
          <button onClick={this.handleInputSubmit}> Submit </button>
        </form>
      </div>
    )
  }

}

export default Form
