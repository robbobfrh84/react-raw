import React from "react"

function Note(props) {

  const style = {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 6,
    position: "relative",
    top: -2,
    marginRight: 5,
    fontSize: 14
  }

  return (
    <div className="note">
      <span style={style}> Message from parent: </span>
      <span> "{props.fromParent}" </span>
      <button className="remove-btn"
        onClick={()=>props.deleteMessage(props.index)}
      >✕</button>
    </div>
  )

}

export default Note
