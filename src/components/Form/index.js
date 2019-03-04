import React from "react"
import "./style.css"

class Form extends React.Component {

  state = {
    input: this.props.currentMessage,
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

  handleUpdateSave = event => {
    event.preventDefault()
    this.props.saveMessage(this.state.input)
    this.setState({ input: "" })
    this.messageInput.focus()
  }

  handleCancelUpdateMessage = event => {
    event.preventDefault()
    this.props.cancelUpdateMessage()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({input: nextProps.currentMessage})
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
          {this.props.edit === "new" &&
            <button onClick={this.handleInputSubmit}>
              Submit
            </button>
          }
          {this.props.edit !== "new" &&
            <div>
              <button onClick={this.handleUpdateSave}>
                {"💾"} Save
              </button>
              <button
                onClick={this.handleCancelUpdateMessage}
                className="cancel-btn"
              >Cancel</button>
            </div>
          }

        </form>
      </div>
    )
  }

}

export default Form
