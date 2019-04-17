import React, { Component } from 'react';

export default class Blockquote extends Component {
  render() {
    return (
      <div>
        <blockquote>{this.props.text}</blockquote>
        <button onClick={this.props.onRemove}>Remove Me</button>
      </div>
    );
  }
}
