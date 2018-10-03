import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <Button variant="contained" color="primary">Hello again</Button>
      </div>
    );
  }
}

export default App;
