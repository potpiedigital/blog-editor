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

// figure out how to render a blocks object using either a p tag or an h1 tag.
// hint: switch statement that returns a different component based on value inside block object
