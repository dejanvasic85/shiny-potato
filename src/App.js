import React, {Component} from "react";
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {CreateEventPage} from "./pages/CreateEventPage";
import HomePage from "./pages/HomePage";


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline/>
          <Navbar/>
        </React.Fragment>

        <Route exact path="/" component={HomePage} />
        <Route path="/new-event" component={CreateEventPage} />
      </Router>
    );
  }
}

export default App;
