import React from "react"

function Full({history}) {

  return (
    <div>
      <h1> Full Page </h1>
      <button onClick={history.goBack}> Go Back </button>
    </div>
  )
}

export default Full
