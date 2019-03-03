import React from "react"
import Note from "./components/Note.js"

function App() {

  const someData = {
    title: "Hello React App!",
    messageToChildren: [
      " 🌟 Good luck out there my child 🥰 ",
      "...Oh, I guess you too 😕 ..."
    ]
  }

  return (
    <div>
      <h1>{someData.title}</h1>
      <h2>Child components:</h2>
      <Note fromParent={someData.messageToChildren[0]}/>
      <Note fromParent={someData.messageToChildren[1]}/>
    </div>
  )

}

export default App
