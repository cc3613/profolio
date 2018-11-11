import React, {Component} from 'react';
import '../../static/medium_logo3.png';

export default class Logo extends Component {
	render() {
		return (
			<img alt="medium_logo" className={this.props.className} src={require("../../static/medium_logo3.png")}/>
		)
	}
}