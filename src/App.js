import React from "react"

function App() {

  const someData = {
    title: "Hello React App!",
    subTitle: "This is an example of a React App using localized data to populate html tags."
  }

  return (
    <div>
      <h1>{someData.title}</h1>
      <p>{someData.subTitle}</p>
      <div> ... But, you can just write text content like normal too. </div>
    </div>
  )

}

export default App
