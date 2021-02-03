// la forma vieja (CommonJs)
//const React = require("react")
//const ReactDOM = require("react-dom")

// la forma nueva de (ES6)
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import App from './App'



ReactDOM.render(<App/>, document.getElementById("root"))
