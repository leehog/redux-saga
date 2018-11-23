import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))

serviceWorker.unregister()
