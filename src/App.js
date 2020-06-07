import React, { Component } from "react";
import Firstpage from "./components/Firstpage";
import Holder from "./components/Holder";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Firstpage} />
          <Route exact path="/Holder" component={Holder} />
        </Switch>
      </Router>
    );
  }
}

export default App;
