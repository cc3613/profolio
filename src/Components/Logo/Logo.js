import React, {Component} from 'react';
import '../../static/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<img alt="jc" className={this.props.className} src={require("../../static/logo.png")}/>
		)
	}
}