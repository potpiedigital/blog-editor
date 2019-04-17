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

  removeBlock = key => {
    const blocks = this.state.blocks.slice();
    const block = blocks.find(b => b.key === key);
    const index = blocks.indexOf(block);
    blocks.splice(index, 1);
    this.setState({ blocks });
  };

  toComponent(block) {
    const { removeBlock } = this;
    switch (block.type) {
      case BlockType.Heading:
        return (
          <Heading
            onRemove={() => removeBlock(block.key)}
            key={block.key}
            text={block.text}
          />
        );
      case BlockType.Text:
        return (
          <Paragraph
            onRemove={() => removeBlock(block.key)}
            key={block.key}
            text={block.text}
          />
        );
      case BlockType.Image:
        return (
          <Image
            onRemove={() => removeBlock(block.key)}
            key={block.key}
            url={block.url}
            text={block.text}
          />
        );
      case BlockType.Blockquote:
        return (
          <Blockquote
            onRemove={() => removeBlock(block.key)}
            key={block.key}
            text={block.text}
          />
        );
      default:
        throw new Error(`unexpected block type: ${block.type}`);
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.blocks.map(this.toComponent, this)}</div>
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
