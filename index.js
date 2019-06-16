import React from 'react';
import ReactDOM from 'react-dom';
import {List} from './components/list.js';
import {Button} from './components/button.js';
import {Label} from './components/label.js';

function Showcase() {
    return <div className="showcase">
    	<List items={['item1', 'item2', 'item3']}/>
    	<Label>I'm a label</Label>
    	<Button>Click me</Button>
    </div>;
}

ReactDOM.render(
  <Showcase/>,
  document.getElementById('anchor')
);
