import React from 'react';
import ReactDOM from 'react-dom';
import {List} from './components/list.js';

function Showcase() {
    return <List items={['item1', 'item2', 'item3']}/>;
}

ReactDOM.render(
  <Showcase/>,
  document.getElementById('anchor')
);
