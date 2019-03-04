import React from "react"
import "./style.css"

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
    <div className={"note "+(props.edit !== props.index || "active")}>
      <span style={style}> Message from parent: </span>
      <span> "{props.fromParent}" </span>

      { props.edit === "new" &&
        <div className="container-btn">
          <button className="btn remove-btn"
            onClick={()=>props.deleteMessage(props.index)}
          >✕</button>
          <button className="btn update-btn"
            onClick={()=>props.updateMessage(props.index, props.fromParent)}
          >&#x270e;</button>
        </div>
      }

    </div>
  )

}

export default Note
