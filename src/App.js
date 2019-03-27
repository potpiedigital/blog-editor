import React, { Component } from 'react';
import Heading from './components/Heading';
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

  addBlock = type => {
    const newBlock = this.toObjectsWithKey(
      { type, text: `${new Date().toLocaleString()}` },
      this.state.blocks.length,
    );
    if (type === BlockType.Image) {
      newBlock.url = 'http://fpoimg.com/300x200';
    }
    this.setState({ blocks: [...this.state.blocks, newBlock] });
  };

  addHeading = () => {
    this.addBlock(BlockType.Heading);
  };

  addText = () => {
    this.addBlock(BlockType.Text);
  };

  addBlockquote = () => {
    this.addBlock(BlockType.Blockquote);
  };

  addImage = () => {
    this.addBlock(BlockType.Image);
  };

  //step 3.1, make custom components for other return statment of toComponent function.

  toComponent(block) {
    switch (block.type) {
      case BlockType.Heading:
        return <Heading key={block.key} text={block.text} />;
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

// step 3: pass in the props that you want the block to have.
