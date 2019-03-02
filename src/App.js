import React from "react"
import Note from "./components/Note.js"
import "./index.css"

function App() {

  const style = {
    color: "cornflowerblue",
    margin: 15
  }

  return (
    <div>
      <div style={style}> The Message List 😲! </div>
      <Note fromParent=" 🌟 Good luck out there my child 🥰 "/>
      <Note fromParent="...Oh, I guess you too 😕 ..."/>
    </div>
  )

}

export default App;
