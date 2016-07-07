import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App.js'

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <App />,
    rootEl  
  )
}

render()