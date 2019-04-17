import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt={this.props.text} />
        <button onClick={this.props.onRemove}>Remove Me</button>
      </div>
    );
  }
}
