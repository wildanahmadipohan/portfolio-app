import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'features/counterSlice';

class Counter extends Component {

  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div>
      <div className="row">
        <div className="col">
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
        <div className="col">
          <span>{ this.props.count }</span>
        </div>
        <div className="col">
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input />
        </div>
        <div className="col">
          <button >Add Amount</button>
        </div>
        <div className="col">
          <button >Add Async Amount</button>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value
})

export default connect(mapStateToProps, { increment, decrement })(Counter)
