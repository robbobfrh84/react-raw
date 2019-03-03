# react-raw
Stripped-down create react app with step by step build-outs. 

----
# Getting Started: Minimal Basic React App

First, create a project folder and then add these files and folders within.
- Create folder `/public` within your project folder
  - Create file `index.html` within `/public` folder and add this code...
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title> Basic React App </title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
    ```
- Create folder `/src` within your project folder
  - Create file `index.js` within `/src` folder and add this code...
    ```javascript
    import React from "react"
    import ReactDOM from "react-dom"
    import App from "./App"

    ReactDOM.render(<App />, document.getElementById("root"))
    ```  
  - Create file `App.js` within `/src` folder and add this code...
    ```javascript
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
    ```

Install Dependencies
- $`npm init` > toggle [enter] through defaults
- $`npm install react`
- $`npm install react-dom`
- $`npm install react-scripts`

To run our react app on our browser, we will need to add an npm script to compile our code to a browser.
- In your newly created `package.json` file, find the `"scripts"` property.
  - Add `"start": "react-scripts start"` within.

Your `package.json` should now look similar to the code below.
- NOTE: `"scripts"` structure.

```json
  {
    "name": "basic-react",
    "version": "1.0.0",
    "description": "- Create Folder `/public`   - Create file `/public/index.html` - Create folder `/src`     - Create file `/src/App.js`   - Create file `/src/index.js`   - Create folder `/components`     - Create file `/components/Note.js`",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "react-scripts start"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "react": "^16.8.3",
      "react-dom": "^16.8.3",
      "react-scripts": "^2.1.5"
    }
  }
```

- Now, run the command $`npm start`
- You may get this alert `? We're unable to detect target browsers.`
  - Just type `y` + [enter] for the detected browser.

If your react app was created successfully, your browser should load the basic raw content added within the code from above. 

