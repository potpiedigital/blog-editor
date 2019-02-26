import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    blocks: [
      { type: 'heading', text: 'hello world' },
      { type: 'text', text: 'another string' },
      { type: 'heading', text: 'hello world' },
      { type: 'text', text: 'another string' },
    ].map(this.withKeys),
  };

  withKeys(block, index) {
    const key = btoa(`${index}: ${JSON.stringify(block)}`);
    return { key, ...block };
  }

  toComponents(block) {
    switch (block.type) {
      case 'heading':
        return <h2 key={block.key}>{block.text}</h2>;
      case 'text':
        return <p key={block.key}>{block.text}</p>;
      default:
        throw new Error(`unexpected block type: ${block.type}`);
    }
  }

  render() {
    return <div>{this.state.blocks.map(this.toComponents)}</div>;
  }
}

export default App;

// figure out how to render a blocks object using either a p tag or an h1 tag.
// hint: switch statement that returns a different component based on value inside block object
