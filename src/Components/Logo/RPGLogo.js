import React, {Component} from 'react';
import '../../static/rpg_logo.png';

export default class Logo extends Component {
	render() {
		return (
			<img alt="github" className={this.props.className} src={require("../../static/rpg_logo.png")}/>
		)
	}
}