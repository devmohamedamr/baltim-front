import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
        <>
          <div className="card col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{this.props.hana}</h5>
                  <p className="card-text">{this.props.shreen}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </>
    );
  }
}
