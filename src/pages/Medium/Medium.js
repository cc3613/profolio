import React, {Component} from 'react';

import Config from '../../utils/Config';
import './Medium.css';

class Medium extends Component {
	render () {
		return (
			<div className="medium-div">
				<iframe title="Medium" className="medium" src={Config.mediumurl} allowfullscreen/>
			</div>
		);
	}
}

export default Medium;
