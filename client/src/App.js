import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Main from "./pages/main";
import Edit from "./pages/edit";
import Login from "./pages/login";
import "./index.css";


const App = () =>
  <Router>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/edit" component={Edit} />
    </Switch>
  </Router>;

export default App;

