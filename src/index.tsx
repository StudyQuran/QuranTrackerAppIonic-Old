import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { IonReactRouter } from '@ionic/react-router'

import App from './App'
import store from './Redux/Store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
