import React from "react"

function Note(props) {

  console.log(props)

  return (
    <div className="note">
      <hr/>
      <h3> New Static Child Component#{props.indexNum}:</h3>
      - <span> Message from parent: <em> "{props.fromParent}" </em> </span>
    </div>
  )

}

export default Note
