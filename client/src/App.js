import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./pages/display";
import Main from "./pages/main";
import Loginpage from "./pages/loginpage";
import Signuppage from "./pages/signuppage";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
    	<Wrapper>
	      <Switch>
	        <Route exact path="/portfolio" component={Display} />
	      </Switch>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Loginpage} />
        </Switch>
        <Switch>
          <Route exact path="/signup" component={Signuppage} />
        </Switch>
	    </Wrapper>
    </div>
  </Router>;

export default App;