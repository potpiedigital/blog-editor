import React, { Component } from 'react';
import './App.css';

const BlockType = {
  Heading: 'heading',
  Text: 'text',
  Image: 'image',
  Blockquote: 'blockquote',
};

class App extends Component {
  state = {
    blocks: [
      { type: BlockType.Heading, text: 'hello world' },
      { type: BlockType.Text, text: 'another string' },
      {
        type: BlockType.Image,
        url: 'http://fpoimg.com/300x300',
        text: 'FPO image',
      },
      { type: BlockType.Blockquote, text: 'this is a quote' },
    ].map(this.toObjectsWithKey),
  };

  toObjectsWithKey(block, index) {
    const key = btoa(`${index}: ${JSON.stringify(block)}`);
    return { key, ...block };
  }

  // step 2: refactor the addtype functions into generic add block function where you just pass in the block.type as an argument
  addType = option => {
    option = BlockType;
    const newOption = this.toObjectsWithKey(
      { type: BlockType.Heading, text: 'testing' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newOption] });
  };

  addBlock = type => {};

  addHeading = () => {
    const newHeading = this.toObjectsWithKey(
      { type: BlockType.Heading, text: 'testing' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newHeading] });
  };

  addText = () => {
    const newText = this.toObjectsWithKey(
      { type: BlockType.Text, text: 'Test number 2 on the button' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newText] });
  };

  addImage = () => {
    const newImage = this.toObjectsWithKey(
      {
        type: BlockType.Image,
        url: 'http://fpoimg.com/300x200',
        text: 'FPO image',
      },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newImage] });
  };

  addBlockquote = () => {
    const newBlockquote = this.toObjectsWithKey(
      { type: BlockType.Blockquote, text: 'this is a NEW quote' },
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, newBlockquote] });
  };

  toComponent(block) {
    switch (block.type) {
      case BlockType.Heading:
        return <h2 key={block.key}>{block.text}</h2>;
      case BlockType.Text:
        return <p key={block.key}>{block.text}</p>;
      case BlockType.Image:
        return <img key={block.key} src={block.url} alt={block.text} />;
      case BlockType.Blockquote:
        return <blockquote key={block.key}>{block.text}</blockquote>;
      default:
        throw new Error(`unexpected block type: ${block.type}`);
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.blocks.map(this.toComponent)}</div>
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

// step 3: pass in the props that you want the block to have.
