import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    blocks: [
      { type: 'heading', text: 'hello world' },
      { type: 'text', text: 'another string' },
      { type: 'image', url: 'http://fpoimg.com/300x300', text: 'FPO image' },
      { type: 'blockQuote', text: 'this is a quote' },
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
      case 'image':
        return <img key={block.key} src={block.url} alt={block.text} />;
      case 'blockQuote':
        return <blockquote key={block.key}>{block.text}</blockquote>;
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
