import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';


const Nav = props => (
	<div>
		<Navbar brand='cvcast' fixed right>
		<NavItem href='/edit'><Icon className="nav-icon">edit</Icon></NavItem>
		<NavItem href='/portfolio'><Icon className="nav-icon">portrait</Icon></NavItem>
		<NavItem href='/portfolio'><Icon className="nav-icon">link</Icon></NavItem>
		<NavItem href='/'><Icon className="nav-icon">home</Icon></NavItem>
		<NavItem className="nav-text">Hello {props.firstName}!</NavItem>
	</Navbar>
	</div>

);

export default Nav;

{/*<div className="navbar-fixed">
  <nav>
    <div className="nav-wrapper">
     <div className="col s12">
      <a href="/" className="brand-logo">cvcast</a>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href='/edit'><i className="material-icons">edit</i>edit</a></li>
        <li><a href='/portfolio'><i className="material-icons">public</i>cv</a></li>
        <li><a href='/main'><i className="material-icons">home</i>home</a></li>
        <li>Hi {props.firstName}!</li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
        <li><a href='/edit'><i className="material-icons">edit</i>edit</a></li>
        <li><a href='/portfolio'><i className="material-icons">public</i>cv</a></li>
        <li><a href='/main'><i className="material-icons">home</i>home</a></li>
        <li>Hi {props.firstName}!</li>
      </ul>
    </div>
   </div>
  </nav>
</div>
*/}
