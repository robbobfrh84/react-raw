import React from "react"
import "./style.css"

function Note(props) {

  console.log(props)

  return (
    <div className="note">
      <span> {props.fromParent} </span>
      <button className="remove-btn" onClick={()=>props.deleteNote(props.id)}>✕</button>
    </div>
  )

}

export default Note
