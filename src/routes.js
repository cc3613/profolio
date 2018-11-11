import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

import Homepage from './pages/Homepage/Homepage';
import RPG from './pages/RPG/RPG';
import Medium from './pages/Medium/Medium';
import NavigationBar from './Components/NavBar/NavBar';
import Github from './pages/Github/Github';
import Resume from './pages/Resume/Resume';

import './routes.css';

export default ({dispatch, getState}) => (
	<Switch>
		<Route
			exact path="/"
			render={(props) =>
				<div>
					<NavigationBar />
					<div className='content'>
						 <Homepage />
					</div>
				</div>
			}
		/>
		<Route
			exact path="/rpg"
			render={(props) =>
				<div>
					<NavigationBar />
					<div className='content'>
						 <RPG />
					</div>
				</div>
			}
		/>
		<Route
			exact path="/resume"
			render={(props) =>
				<div>
					<NavigationBar />
					<div className='content'>
						 <Resume />
					</div>
				</div>
			}
		/>
		<Route
			exact path="/medium"
			render={(props) =>
				<div>
					<NavigationBar />
					<div className='content'>
						 <Medium />
					</div>
				</div>
			}
		/>
		<Route
			exact path="/github"
			render={(props) =>
				<div>
					<NavigationBar />
					<div className='content'>
						 <Github />
					</div>
				</div>
			}
		/>
	</Switch>
);