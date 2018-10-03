import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
