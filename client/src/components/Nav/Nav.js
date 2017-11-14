import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';


const Nav = props => (

	<Navbar brand='cvcast' fixed right>
		<NavItem href='/edit'><Icon>edit</Icon></NavItem>
		<NavItem href='/portfolio'><Icon>public</Icon></NavItem>
		<NavItem href=''><Icon>link</Icon></NavItem>
		<NavItem href='/main'><Icon>portrait</Icon></NavItem>
		<NavItem>Hello {props.firstName}!</NavItem>
	</Navbar>
);

export default Nav;