# react-raw
Stripped-down React app with step by step build-outs.

### See in action
Start by cloning this repository and `cd` into it.
- $`npm install`
- $`npm start` > should be available locally at `localhost:3000`

NOTE: You'll be on the "master" branch (final step of the guide). So You'll likely want to have all the branches to view locally.
- At the root level of the repo you just cloned, run this script... copy/paste😉

```
git branch -a | grep -v HEAD | perl -ne 'chomp($_); s|^\*?\s*||; if (m|(.+)/(.+)| && not $d{$2}) {print qq(git branch --track $2 $1/$2\n)} else {$d{$_}=1}' | csh -xfs
```

- This will create a clone of every branch of the project.
- So, now, you can simply $`git branch` to see all the branches(steps)
- `git checkout 1-basic-react-app` to see the starting code of the project.
- OR, follow below to build yourself🌟

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

---

# react-raw order of development

Branch Names:
* 1-basic-react-app
* 2-add-static-components
* 3-loop-components
* 4-add-css-and-localized-css
* 5-make-stateful-component
* 6-stateful-events
* 7-stateful-remove-array
* 8-update-stateful-list
* 9-component-css
* 10-react-router
  * `npm install react-dom-router`
* 11-router-links
* 12-subpages
* 13-set-data-to-root
* 14-add-axios-api
  * API example: https://api.nasa.gov/api.html#MarsPhotos
  * `npm install axios`
* 15-build-to-deploy
  * New NPM `"script"`: `"build":"react-script build"`
  * `npm run build` > builds `build` folder for deployment
* 16-react-bootstrap (https://react-bootstrap.github.io/components/buttons/)
  * `npm install react-bootstrap bootstrap`
  * Jumbotron: https://react-bootstrap.netlify.com/components/jumbotron/#jumbotron
  * Not added option (for only adding bootstrap you use):
    * https://getbootstrap.com/docs/3.4/customize/
* 17-bootstrap-navbar
  * Also: fixed subpage on home (about/more)
* 18-loading-icon
* 19-landing-redesign-and-api
  * Big design change with integration of API on home page.
* 20-sass
  * `npm install node-sass`
  * also placed development folder in build for github pages to use. 
