import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

// import { withFirebase } from '../Firebase';
import Logo from '../Logo/Logo';
import Config from '../../utils/Config';

// import SignoutButton from '../SignoutButton/SignoutButton';

import './NavBar.css';



class NavigationBar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			authUser: null,
		}
	}
	// componentDidMount() {
	//     this.props.firebase.auth.onAuthStateChanged(authUser => {
	//       authUser
	//         ? this.setState({ authUser })
	//         : this.setState({ authUser: null });
	//     });
	// }
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
							<NavItem activeclassname='nav-active' componentClass={NavLink} href="/" to="/">Home</NavItem>
							<NavItem activeclassname='nav-active' componentClass={NavLink} href="/rpg" to="/rpg">Tales of Randomness</NavItem>
							<NavItem activeclassname='nav-active' componentClass={NavLink} href="/resume" to="/resume">Resume</NavItem>
							<NavItem activeclassname='nav-active' href={Config.mediumurl}>Medium</NavItem>
							<NavItem activeclassname='nav-active' href={Config.githuburl}>Github</NavItem>
							{/* <NavItem href="/github">Github</NavItem> */}
						</Nav>
						{/* <Nav pullRight> */}
						{/* 	{this.state.authUser ? <NavItem onClick={(firebase) => firebase.doSignOut}>Sign Out</NavItem> : null} */}
						{/* </Nav> */}
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

export default NavigationBar;