import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Main from "./pages/Main";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Wrapper>
  	      <Switch>
  	        <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
      </Wrapper>
    </div>
  </Router>;

export default App;
