import React from "react";
import { Redirect, Route, Router } from 'react-router-dom';
import Portfolio from "./pages/portfolio";
import Main from "./pages/main";
import Edit from "./pages/edit";
import Edit2 from "./pages/edit2";
import Welcome from "./pages/welcome";
import "./index.css";

//Material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>

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

        <Route exact path="/welcome" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Welcome auth={auth} {...props} />
            )
          )} />

        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App;
