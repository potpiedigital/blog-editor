import React, { Component } from 'react';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Blockquote from './components/Blockquote';
import Image from './components/Image';
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
    ].map(this.toObjectWithKey),
  };

  toObjectWithKey(block, index) {
    const key = btoa(`${index}: ${JSON.stringify(block)}`);
    return { key, ...block };
  }

  addBlock = type => {
    const newBlock = this.toObjectWithKey(
      { type, text: `${new Date().toLocaleString()}` },
      this.state.blocks.length,
    );
    if (type === BlockType.Image) {
      newBlock.url = 'http://fpoimg.com/300x200';
    }
    this.setState({ blocks: [...this.state.blocks, newBlock] });
  };

  //create a remove block function which will take the key of the block, find it within the state, remove it, set the new state to somtehing that doesnt have that block in it
  //add a button to each component that will call removeBlock with the right key.
  //array splice function to create the new state.
  removeBlock = type => {
    const byeBlock = this.toObjectWithKey(type).splice(
      this.state.blocks.length,
    );
    this.setState({ blocks: [...this.state.blocks, byeBlock] });
  };

  toComponent(block) {
    switch (block.type) {
      case BlockType.Heading:
        return <Heading key={block.key} text={block.text} />;
      case BlockType.Text:
        return <Paragraph key={block.key} text={block.text} />;
      case BlockType.Image:
        return <Image key={block.key} url={block.url} text={block.text} />;
      case BlockType.Blockquote:
        return <Blockquote key={block.key} text={block.text} />;
      default:
        throw new Error(`unexpected block type: ${block.type}`);
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.blocks.map(this.toComponent)}</div>
        <div>
          {Object.values(BlockType).map(value => {
            return (
              <button
                onClick={() => {
                  this.addBlock(value);
                }}
              >{`new ${value}`}</button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

// step 3: pass in the props that you want the block to have.
