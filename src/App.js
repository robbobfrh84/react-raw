import React from "react"
import Note from "./components/Note.js"
import "./index.css"

function App() {

  const someData = {
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

  return (
    <div>
      <div style={someData.titleStyle}>{someData.title}</div>
      <h2 className="heading"> Child components: </h2>
      {someData.messageToChildren.map( (message, i) => (
        <Note fromParent={message} indexNum={i+1}/>
      ))}
    </div>
  )

}

export default App
