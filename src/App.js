import React from "react"
import Note from "./components/Note.js"
import "./index.css"

class App extends React.Component {

  state = {
    title: "Hello React App!",
    messageToChildren: [
      " 🌟 Good luck out there my child 🥰 ",
      "...Oh, I guess you too 😕 ...",
      "...Wait, I have another child 😳? ..."
    ],
    titleStyle: {
      color: "cornflowerblue",
      margin: 15,
      fontSize: 35
    }
  }

  render() {
    return (
      <div>
        <div style={this.state.titleStyle}>{this.state.title}</div>
        <h2 className="heading"> Child components: </h2>
        {this.state.messageToChildren.map( (message, i) => (
          <Note fromParent={message} indexNum={i+1} key={i}/>
        ))}
      </div>
    )
  }

}

export default App
