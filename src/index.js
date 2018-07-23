import React from 'react'
import ReactDOM from 'react-dom'
import './styles/common.css'
import Root from './views/Root'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker();
