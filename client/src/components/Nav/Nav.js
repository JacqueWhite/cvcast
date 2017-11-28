import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';


const Nav = props => (
<div className="navbar-fixed">
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

);

export default Nav;

// <div className="navbar-fixed">
// 	<nav>
// 		<div className="nav-wrapper">
// 			<div className="col s12">
// 					<a href="/" className="brand-logo">cvcast</a>
// 					<a className="button-collapse" href="#" data-activates="nav-mobile">
// 					<i className="material-icons">view_headline</i></a>
// 				<ul className="right hide-on-med-and-down">
// 					<li><a href="/edit"><i className="material-icons">edit</i></a></li>
// 					<li><a href="/portfolio"><i className="material-icons">public</i></a></li>
// 					<li><a href=""><i className="material-icons">link</i></a></li>
// 					<li><a href="/main"><i className="material-icons">portrait</i></a></li>
// 					<li><a href="">Hello Jacque!</a></li>
// 				</ul>

// 				<ul id="nav-mobile" className="side-nav" style="transform: translateX(0px);">
// 					<li><a href="/edit"><i className="material-icons">edit</i></a></li>
// 					<li><a href="/portfolio"><i className="material-icons">public</i></a></li>
// 					<li><a href=""><i className="material-icons">link</i></a></li>
// 					<li><a href="/main"><i className="material-icons">portrait</i></a></li>
// 					<li><a href="">Hello Jacque!</a></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</nav>
// </div>

// 	<Navbar brand='cvcast' fixed right>
// 		<NavItem href='/edit'><Icon>edit</Icon></NavItem>
// 		<NavItem href='/portfolio'><Icon>public</Icon></NavItem>
// 		<NavItem href=''><Icon>link</Icon></NavItem>
// 		<NavItem href='/main'><Icon>portrait</Icon></NavItem>
// 		<NavItem>Hello {props.firstName}!</NavItem>
// 	</Navbar>
