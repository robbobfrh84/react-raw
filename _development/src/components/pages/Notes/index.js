import React from "react"
import Note from "../../Note"
import Form from "../../Form"
import Footer from "../../Footer"
import "./style.css"

class Notes extends React.Component {

  state = {
    rootData: this.props.rootData,
    messageToChildren: this.props.rootData.pageData.notes.messageToChildren,
    currentMessage: "",
    edit: "new",
  }

  addMessage = (message) => {
    this.state.messageToChildren.push(message)
    this.state.rootData.updatePageData('notes', this.state)
  }

  deleteMessage = (index) => {
    this.state.messageToChildren.splice(index, 1)
    this.state.rootData.updatePageData('notes', this.state)
  }

  updateMessage = (index, message) => {
    this.setState({ edit: index, currentMessage: message })
  }

  cancelUpdateMessage = () => {
    this.setState({ edit: "new", currentMessage: "" })
  }

  saveMessage = (updatedMessage, obj = {...this.state}) => {
    obj.messageToChildren[this.state.edit] = updatedMessage
    this.setState({ messageToChildren: obj.messageToChildren, edit: "new", currentMessage: ""  })
    this.state.rootData.updatePageData('notes', obj)
  }

  render() {
    return (
      <div className="notes">

        <div className="notes-container">

          <Form
            addMessage={this.addMessage}
            currentMessage={this.state.currentMessage}
            cancelUpdateMessage={this.cancelUpdateMessage}
            saveMessage={this.saveMessage}
            edit={this.state.edit}
          />

          <h2 className="heading"> Child components: </h2>

          {this.state.messageToChildren.map( (message, i) => (
            <Note
              fromParent={message}
              index={i}
              key={i}
              deleteMessage={this.deleteMessage}
              updateMessage={this.updateMessage}
              saveMessage={this.saveMessage}
              edit={this.state.edit}
            />
          ))}

        </div>

        <Footer />

      </div>
    )
  }

}

export default Notes
