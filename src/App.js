import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { blocks: ['hello world', 'another string'] };
  render() {
    return (
      <div>
        {this.state.blocks.map(block => {
          return <p key={block}>{block}</p>;
        })}
      </div>
    );
  }
}

export default App;
