import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';
import './Nav.css';

const Nav = props => (

	<Navbar brand='logo' fixed='true' right>
		<NavItem href='get-started.html'><Icon>search</Icon></NavItem>
		<NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
		<NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
		<NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
	</Navbar>
);

export default Nav;