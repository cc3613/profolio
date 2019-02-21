import React, {Component} from 'react';

import './Character.css';


class HeroCharacter extends Component {
	render () {
		let HeroAttributes = Object.keys(this.props.props).map(key => <p key={key}>{key}: {this.props.props[key]}</p>)

		return (
			<div className='character hero'>
				<h5>This is your hero's status: </h5>
				<hr></hr>
				{HeroAttributes}
				<p>gold: {this.props.gold}</p>
				{this.props.until_next_level ? <p>exp until next level: {this.props.until_next_level}</p> : null}
			</div>
		);
	}
}


class EnemyCharacter extends Component {
	render () {
		let EnemyAttributes = Object.keys(this.props.props).map(key => key !== 'desc' ? (key !== 'name' ? <p key={key}>{key}: {this.props.props[key]}</p> : null) : null)

		return (
			<div className='character enemy'>
				<h4>{this.props.props.name}</h4>
				<h5>{this.props.props.desc}</h5>
				<hr></hr>
				{EnemyAttributes}
			</div>
		);
	}
}



export {HeroCharacter, EnemyCharacter};