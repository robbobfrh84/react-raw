import React from "react"
import Note from "./components/Note.js"

function App() {

  const someData = {
    title: "Hello React App!",
    messageToChildren: [
      " 🌟 Good luck out there my child 🥰 ",
      "...Oh, I guess you too 😕 ...",
      "...Wait, I have another child 😳 !? ..."
    ]
  }

  return (
    <div>
      <h1>{someData.title}</h1>
      <h2>Child components:</h2>
      {someData.messageToChildren.map( (message, i) => (
        <Note fromParent={message} indexNum={i+1} key={i}/>
      ))}
    </div>
  )

}

export default App
