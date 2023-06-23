import React, { Component } from 'react';
import testimg from './img/2.png.webp'
export default class Counter extends Component {
  constructor(){
      super()
      this.state = {
        name:"mohamed",
        email:"m@m.com"
      }
  }
  render() {
    let {name,email} = this.state
    return (
      <>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <img src={testimg} />
      </>
    );
  }
}
