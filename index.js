import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './components/greeting.js';

class App extends React.Component {
  render() {
    return <Greeting name="itzik" />;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
