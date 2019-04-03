import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return <h2>{this.props.text}</h2>;
  }
}
