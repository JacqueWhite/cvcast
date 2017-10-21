import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';


const Nav = props => (

	<Navbar brand='Show and Tell' fixed right>
		<NavItem href='/'><Icon>search</Icon></NavItem>
		<NavItem href=''><Icon>view_module</Icon></NavItem>
		<NavItem href='/edit'><Icon>link</Icon></NavItem>
		<NavItem href='/portfolio'><Icon>public</Icon></NavItem>
		<NavItem href='/main'><Icon>portrait</Icon></NavItem>
		<NavItem>Hello, {props.firstName}!</NavItem>
	</Navbar>
);

export default Nav;