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

  addText = () => {
    const newText = this.withKeys(
      { type: 'text', text: 'Test number 2 on the button' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newText] });
  };

  addImage = () => {
    const newImage = this.withKeys(
      { type: 'image', url: 'http://fpoimg.com/300x200', text: 'FPO image' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newImage] });
  };

  addBlockquote = () => {
    const newBlockquote = this.withKeys(
      { type: 'blockQuote', text: 'this is a NEW quote' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newBlockquote] });
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
        <button onClick={this.addText}>New Text Field</button>
        <button onClick={this.addImage}>New Image</button>
        <button onClick={this.addBlockquote}>New Bockquote</button>
      </div>
    );
  }
}

export default App;

// step 1: make buttons that add new (random) text, image and block quotes
// step 2: refactor the addtype functions into generic add block function where you just pass in the block.type as an argument
// step 3: pass in the props that you want the block to have.
