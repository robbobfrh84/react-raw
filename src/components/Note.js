import React from "react"

function Note(props) {

  console.log(props)

  return (
    <div className="note">
      <span> {props.fromParent} </span>
    </div>
  )

}

export default Note
