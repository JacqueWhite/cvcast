import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';


const Nav = props => (

	<Navbar href='/' brand='Show and Tell' fixed right>
		<NavItem href='/edit'><Icon>edit</Icon></NavItem>
		<NavItem href='/portfolio'><Icon>public</Icon></NavItem>
		<NavItem href='#'><Icon>portrait</Icon></NavItem>
		<NavItem>Hello, {props.firstName}!</NavItem>
	</Navbar>
);

export default Nav;