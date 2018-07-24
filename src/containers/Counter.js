import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
      <p>
        Clicked: {value} times
        {' '}
        <Button onClick={onIncrement}>+</Button>
        {' '}
        <Button onClick={onDecrement}>-</Button>
      </p>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

export default connect(mapStateToProps)(Counter)
