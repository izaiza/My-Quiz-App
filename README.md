# My Quiz App
This is a simple quiz app built with ReactJS.

## What's inside
You will see a set of questions which have predefined answers assigned.
Giving the right answer to the question will result in marking the input field green. Also, the success message will show up.
As a result of the wrong answer you will see the input field marked in red. The error message will also be in place.
You will be allowed to perform only one action on the question level meaning once answered, you cannot get back to the question again.
The app counts all correct answers and update the counter after each.

### Installing
After forking repo, set up your webpack and package.json files (you can also use the one below)

```
const HtmlWebPackPlugin = require('html-webpack-plugin');
   
   module.exports = {
       mode: 'development',
       entry: './src/App.js',
       watch: true,
       module: {
           rules: [
               {
                   test: /\.js$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader'
                   }
               },
               {
                   test: /\.html$/,
                   use: {
                       loader: 'html-loader'
                   }
               },
               {
                   test: /\.scss$/,
                   use: [
                       "style-loader", // creates style nodes from JS strings
                       "css-loader", // translates CSS into CommonJS
                       "sass-loader" // compiles Sass to CSS, using Node Sass by default
                   ]
               }
           ]
       },
       plugins: [
           new HtmlWebPackPlugin({
               template: './src/template.html',
               filename: './index.html'
           })
       ]
   }
```

```
{
  "name": "react-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "homepage": "https://github.com/izaiza/My-Quiz-App",
  "scripts": {
    "dev": "webpack-dev-server",
    "prod": "webpack --config webpack.config.prod.js",
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.4.4",
    "@babel/plugin-proposal-class-properties": "^7.4.4",
    "@babel/preset-env": "^7.4.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "gulp-babel": "^8.0.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
  },
  "dependencies": {
    "classnames": "^2.2.6",
    "gh-pages": "^2.0.1",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-style-loader": "^2.3.0"
  }
}
```

Install node packages with

```npm install```

Run the app with

```npm run dev```