import React, {Component} from 'react';

import Config from '../../utils/Config';
import './Github.css';

class Github extends Component {
	render () {
		return (
			<div className="github-div">
				<iframe title="Github" className="github" src={Config.githuburl} allowfullscreen/>
			</div>
		);
	}
}

export default Github;
