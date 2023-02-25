# REACT-APP-WITH-WEBPACK
STEPS TO CREATE REACT APP WITH WEBPACK


***1. create a folder and initialize npm with***

```npm init -y```

***2. install the following packages by running the following command.***

```npm i react react-dom```


```npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server```

***3. Create .babelrc file and copy the following code in it:***

```
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

***4. Create a webpack.config.js file and paste the following code in it.***

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
output: {
path: path.join(__dirname, "/public"), // the bundle output path
filename: "main.js", // the name of the bundle
},
plugins: [
new HtmlWebpackPlugin({
template: "src/index.html", // to import index.html file inside index.js
}),
],
devServer: {
port: 3030, // you can change the port
},
module: {
rules: [
{
test: /\.(js|jsx)$/, // .js and .jsx files
exclude: /node_modules/, // excluding the node_modules folder
use: {
loader: "babel-loader",
},
},
{
test: /\.(sa|sc|c)ss$/, // styles files
use: ["style-loader", "css-loader", "sass-loader"],
},
{
test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
loader: "url-loader",
options: { limit: false },
},
],
},
};
```

***5. Create an /src folder and create the following files inside it:***

*i) index.html*
*ii) index.css*
*iii) index.js*
*iv) App.js*

***6. Add the following code in index.html***

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>React with Webpack</title>
</head>
<body>
<div id="root"></div>
<!-- Notice we are pointing to `main.js` file -->
<script src="main.js"></script>
</body>
</html>
```
***7. Add the following in index.css***

```
h1 {
color: red;
}
```

***8. Add the following in index.js***

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
const el = document.getElementById("root");
ReactDOM.render(<App />, el);
9. Add the following in App.js
import React from "react";
const App = () => {
return <h1>Hello React</h1>;
};
export default App;
```

***10. in your package.json file, remove the test script in the scripts tag and add the build and serve***

**scripts as follows:**

```
"serve": "webpack serve --mode development",
"build": "webpack --mode production"
```

***11. In your terminal run the build script by typing the following command:***

```npm run build```

***12. Serve your application by running:***

```npm run serve```

***13. Browse to localhost:3030 and see your app running. Modify it according to your needs.***

***Remember to add the node_modules dirsctory in the .gitignore file ***


