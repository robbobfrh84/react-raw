import React from "react"
import Form from "./components/Form"
import Note from "./components/Note"
import "./index.css"

class App extends React.Component {

  state = {
    title: "The Message List 😲!",
    notesTitle: "• All Notes •",
    notes: [
      "🌟 Good luck out there my child 🥰",
      "...Oh, I guess you too 😕 ..."
    ]
  }

  addNote = (row) => {
    const arr = [...this.state.notes]
    arr.push(row)
    this.setState({ notes: arr })
  }

  deleteNote = (index) => {
    const arr = [...this.state.notes]
    arr.splice(index, 1)
    this.setState({ notes: arr })
  }

  render() {
    return (
      <div>
        <div>{this.state.title}</div>

        <Form addNote={this.addNote} />

        <div className="notes">
          <div className="notesTitle">{this.state.notesTitle}</div>

          {this.state.notes.map( (note, i) =>
            <Note
              fromParent={note}
              key={i}
              id={i}
              deleteNote={this.deleteNote}
            />
          )}

        </div>
      </div>
    )
  }

}

export default App;
