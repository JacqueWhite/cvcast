import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Main from "./pages/Main";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signuppage from "./pages/Signuppage";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
    	<Wrapper>
	      <Switch>
	        <Route exact path="/portfolio" component={Portfolio} />
	      </Switch>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/signup" component={Signuppage} />
        </Switch>
        <Switch>
          <Route exact path="/edit" component={Edit} />
        </Switch>
	    </Wrapper>
    </div>
  </Router>;

export default App;
