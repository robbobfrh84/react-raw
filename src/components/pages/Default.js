import React from "react"

function Default(props) {
  const style = {
    backgroundColor: "rgba(0,0,0,0.2)",
    fontFamily: "courier",
    fontSize: 25,
    padding: "4px 10px 4px 4px",
    borderRadius: 3
  }
  return (
    <h1>
      <span style={style}>{window.location.pathname}</span>
      &nbsp; Page does not exist
    </h1>
  )
}

export default Default
