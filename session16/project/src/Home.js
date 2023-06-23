import React, { Component } from 'react';
import Card from './Card';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      colors:[
        "red",
        "green",
        "blue"
      ]
    }
  }
  render() {
    return (
      <>
        <div className='container'>
            <div className='row'>
              
              {this.state.colors.map((c)=> <Card hana={c} />)}
              
            {/* <Card hana='title one' shreen='desc 1' />
            <Card  hana='title two' shreen='desc two' />
            <Card  hana='title three' shreen='desc three'/>   */}
            </div>
        </div>
      </>
    );
  }
}
