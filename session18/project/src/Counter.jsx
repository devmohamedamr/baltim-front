import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
       count:0 
  }  
  render() {
    let {count} = this.state
    return (
      <>
        <h1>count is  : {count}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }

  increment = ()=>{
        this.setState({count:++this.state.count})
  }

}
