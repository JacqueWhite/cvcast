import React from "react";
import { Redirect, Route, Router } from 'react-router-dom';
import Portfolio from "./pages/portfolio";
import Main from "./pages/main";
import Edit from "./pages/edit";
import Login from "./pages/login";
import "./index.css";

// Auth stuff
import Auth from './components/Auth/Auth';
import Callback from './components/Callback/Callback';
import Profile from './components/Profile/Profile';
import history from './components/history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

<<<<<<< HEAD
const App = () =>
  <Router>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio} />
      
      {/* <Route path="/signup" render={(props) => (
        !auth.isAuthenticated() ? (
          <Redirect to="/signup"/>
        ) : (
          <Signup auth={auth} {...props} />
        )
      )} /> */}

      <Route exact path="/profile" render={(props) => (
        !auth.isAuthenticated() ? (
          <Redirect to="/"/>
        ) : (
          <Profile auth={auth} {...props} />
        )
      )} />
      <Route exact path="/portfolio" render={(props) => (
        !auth.isAuthenticated() ? (
          <Portfolio auth={auth} {...props} />
        ) : (
          <Portfolio auth={auth} {...props} />
        )
      )} />

      <Route exact path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>

      <Route exact path="/" render={(props) => <Main auth={auth} {...props} />} />



      <Route exact path="/login" component={Login} />
      <Route exact path="/edit" component={Edit} />
    </Switch>

  </Router>;
=======
const App = () => {
  return (
    <Router history={history} component={App}>
        <div>
          <Route exact path="/" render={(props) => {
            return <Main auth={auth} {...props} />
          }} />

          <Route exact path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />

          <Route exact path="/portfolio" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Portfolio auth={auth} {...props} />
            )
          )} />

          <Route exact path="/edit" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Edit auth={auth} {...props} />
            )
          )} />

          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

          <Route exact path="/login" component={Login} />
        </div>
      </Router>
  )
}
>>>>>>> test2

export default App;
