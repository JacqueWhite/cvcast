import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./pages/display";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Form from "./components/Form";


const App = () =>
  <Router>
    <div>
    	<Wrapper>
	      <Switch>
	        <Route exact path="/" component={Display} />
	      </Switch>
	    </Wrapper>
    </div>
  </Router>;

export default App;