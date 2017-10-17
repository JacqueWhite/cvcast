import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./pages/Display/display";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


const App = () =>
  <Router>
    <div>
    	<Title />
    	<Wrapper>
	      <Switch>
	        <Route exact path="/" component={Display} />
	      </Switch>
	    </Wrapper>
    </div>
  </Router>;

export default App;