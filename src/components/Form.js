import React from "react"

class Form extends React.Component {

  state = {
    input: "",
    autoFocus: true
  }

  handleInputChange = event => {
    this.setState({ input: event.target.value })
  }

  handleInputSubmit = event => {
    event.preventDefault()
    this.props.addMessage(this.state.input)
    this.setState({ input: "" })
    this.messageInput.focus()
  }

  render() {
    return (
      <div className="form">
        <form>
          <input
            id="input"
            onChange={this.handleInputChange}
            placeholder="enter message to child..."
            value={this.state.input}
            autoFocus={this.state.autoFocus}
            ref={ elm => this.messageInput = elm }
          />
          <button onClick={this.handleInputSubmit}> Submit </button>
        </form>
      </div>
    )
  }

}

export default Form
