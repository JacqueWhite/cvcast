import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Main from "./pages/main";
import Edit from "./pages/edit";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Wrapper from "./components/Wrapper";
import "./index.css";

const App = () =>
  <Router>
    <div>
      <Wrapper>
  	      <Switch>
  	        <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
      </Wrapper>
    </div>
  </Router>;

export default App;

