import React, {Component} from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Config from '../../utils/Config';

import './NavBar.css';



class NavigationBar extends Component {
	render() {
		return (
			<header>
				<Navbar className="navbar-mod">
					<Navbar.Brand className="brand">
						<Logo className="nav-logo"/>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav>
							<NavItem href="/">Home</NavItem>
							<NavItem href="/rpg">Tales of Randomness</NavItem>
							<NavItem href="/resume">Resume</NavItem>
							<NavItem href={Config.mediumurl}>Medium</NavItem>
							<NavItem href={Config.githuburl}>Github</NavItem>
							{/* <NavItem href="/github">Github</NavItem> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

export default NavigationBar;