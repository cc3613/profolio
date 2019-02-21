import React from 'react';

import Logo from '../../Components/Logo/Logo';

import './NotFound.css';

const NotFound = (props) => (
	<div>
		<Logo className='logo'/>
		<h1>Oops! Your URL leads to land of darkness full of Nickelback's music!</h1>
		<p className='nickelback'>Look at this photograph~~&#9834;</p>
	</div>	
)

export default NotFound;