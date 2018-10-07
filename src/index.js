import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateEventPage from "./pages/CreateEventPage";
import HomePage from "./pages/HomePage";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component{
  render() {
    return <Router>
      <div>
        <React.Fragment>
          <CssBaseline/>
          <Navbar/>
        </React.Fragment>

        <Route exact path="/" component={HomePage}/>
        <Route path="/new-event" component={CreateEventPage}/>
      </div>
    </Router>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

