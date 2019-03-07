import React from "react"
import Note from "../Note"
import Form from "../Form"

class Notes extends React.Component {

  state = {
    title: "Hello React App!",
    messageToChildren: [
      " 🌟 Good luck out there my child 🥰 ",
      "...Oh, I guess you too 😕 ...",
      "...Wait, I have another child 😳? ..."
    ],
    currentMessage: "",
    edit: "new",
    titleStyle: {
      color: "cornflowerblue",
      margin: 15,
      fontSize: 35
    }
  }

  addMessage = (message) => {
    const arr = [...this.state.messageToChildren]
    arr.push(message)
    this.setState({ messageToChildren: arr })
  }

  deleteMessage = (index) => {
    const arr = [...this.state.messageToChildren]
    arr.splice(index, 1)
    this.setState({ messageToChildren: arr })
  }

  updateMessage = (index, message) => {
    this.setState({ edit: index, currentMessage: message })
  }

  cancelUpdateMessage = () => {
    this.setState({ edit: "new", currentMessage: "" })
  }

  saveMessage = (updatedMessage) => {
    const arr = [...this.state.messageToChildren]
    arr[this.state.edit] = updatedMessage
    this.setState({ messageToChildren: arr, edit: "new", currentMessage: ""  })
  }

  render() {
    return (
      <div>
        <div style={this.state.titleStyle}>{this.state.title}</div>

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
    )
  }

}

export default Notes
