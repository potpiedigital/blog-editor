import React, { Component } from 'react';

export default class Blockquote extends Component {
  render() {
    return <blockquote>{this.props.text}</blockquote>;
  }
}
