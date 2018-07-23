import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Counter from '../containers/Counter'
import './App/App.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-con">
            <div>
              HELLO HOME
            </div>
            <div>
              <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DESCREMENT' })}
              />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
