import React from 'react';
import './Nav.css';

const Nav = props => (
<div>
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">cvcast</a>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href='/edit'><i class="material-icons">edit</i>edit</a></li>
        <li><a href='/portfolio'><i class="material-icons">public</i>cv</a></li>
        <li><a href='/main'><i class="material-icons">home</i>home</a></li>
        <li>Hi {props.firstName}!</li>
      </ul>
      <ul className="side-nav" id="nav-mobile">
        <li><a href='/edit'><i class="material-icons">edit</i>edit</a></li>
        <li><a href='/portfolio'><i class="material-icons">public</i>cv</a></li>
        <li><a href='/main'><i class="material-icons">home</i>home</a></li>
        <li>Hi {props.firstName}!</li>
      </ul>
    </div>
  </nav>
</div>
);

export default Nav;