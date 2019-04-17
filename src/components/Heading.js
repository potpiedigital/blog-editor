import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
        <button onClick={this.props.onRemove}>Remove Me</button>
      </div>
    );
  }
}
