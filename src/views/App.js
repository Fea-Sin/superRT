import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Counter from '../containers/Counter'
import {
  Button,
  Icon,
  notification
} from 'antd'
import './App/App.css'

const store = configureStore()
const openNotification = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification.'
  })
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-con">
            <div>
              <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DESCREMENT' })}
              />
            </div>
            <div>
              <Button onClick={() => openNotification('success')}>HELLO HOME</Button>
              <Icon type='aliyun' className='icon-test' />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
