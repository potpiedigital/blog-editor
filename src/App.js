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

  addHeading = () => {
    const newHeading = this.withKeys(
      { type: 'heading', text: 'testing' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newHeading] });
  };

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
    return (
      <div>
        <div>{this.state.blocks.map(this.toComponents)}</div>
        <button onClick={this.addHeading}>New heading</button>
      </div>
    );
  }
}

export default App;
