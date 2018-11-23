import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/'

ReactDOM.render(
    <App />
, document.getElementById('root'))

serviceWorker.unregister()
