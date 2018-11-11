import React, {Component} from 'react';
import '../../static/github_logo2.png';

export default class Logo extends Component {
	render() {
		return (
			<img alt="github" className={this.props.className} src={require("../../static/github_logo2.png")}/>
		)
	}
}