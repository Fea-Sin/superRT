import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from './App'
import Header from './Header/Header'
import About from './About/About'

const Root = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/home' component={App}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  </Router>
)

export default Root
