import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
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
