import React from 'react';
import {Route, Switch} from 'react-router';

import Homepage from './pages/Homepage/Homepage';
import RPG from './pages/RPG/RPG';
import Medium from './pages/Medium/Medium';
import NavigationBar from './Components/NavBar/NavBar';
import Github from './pages/Github/Github';
import Resume from './pages/Resume/Resume';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import NotFound from './pages/NotFound/NotFound';

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
		<Route
			exact path="/signup"
			render={(props) => 
				<div>
					<NavigationBar />
					<div className='content'>
						<Signup />
					</div>
				</div>
			}
		/>
		<Route
			exact path="/signin"
			render={(props) => 
				<div>
					<NavigationBar />
					<div className='content'>
						<Signin />
					</div>
				</div>
			}
		/>
		<Route
			render={(props) => 
				<div>
					<div className='content'>
						<NotFound />
					</div>
				</div>
			}
		/>

	</Switch>
);

// export default Routers;