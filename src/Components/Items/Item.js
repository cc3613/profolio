import React, {Component} from 'react';

import {OverlayTrigger, Tooltip} from 'react-bootstrap';

// import Aux from '../Aux/Aux';

import './Item.css';

// const attribute_order = 

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			selected: false,
		};
		this.handleHoverOn = this.handleHoverOn.bind(this);
		this.handleHoverOff = this.handleHoverOff.bind(this);
	}

	handleHoverOn() {
		this.setState({show: true});
	}

	handleHoverOff() {
		this.setState({show: false});
	}

	handleEquip(e) {
		this.setState({selected: !this.state.selected});
		this.handleCallback(this.props.id, this.props.attri.buy);
	}

	handleCallback(itemId, gold) {
		this.props.selected(itemId, gold);
	}

	toTitle = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	render() {
		let attributes = Object.keys(this.props.attri).map((key) => <p key={key}>{this.toTitle(key)}: {this.props.attri[key]}</p>)
		let itemClassName = this.state.selected ? 'aux equip': 'aux'
		return (
			
			<OverlayTrigger key={this.props.id} placement='top' className='item'
				            overlay={<Tooltip id={this.props.id}>{attributes}</Tooltip>}>
				<div className={itemClassName} onClick={(e) => this.handleEquip()}>
					{this.props.attri.name}
				</div>
			</OverlayTrigger>
			
		)
	}
}

export default Item;