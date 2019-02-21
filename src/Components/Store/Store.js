import React, {Component} from 'react';

import {Modal, Button} from 'react-bootstrap';

import ItemDisplay from '../Items/ItemDisplay';

import './Store.css';

class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsSelected: [],
			goldNeeded: 0
		}
	}

	handleItemSelected = (id, gold) => {
		let newItemsSelected = this.state.itemsSelected;
		let goldNeeded = this.state.goldNeeded;
		if (newItemsSelected.includes(id)) {
			newItemsSelected = newItemsSelected.filter(itemId => itemId !== id);
			goldNeeded -= gold;
		} else {
			newItemsSelected.push(id);
			goldNeeded += gold;
		}
		this.setState({itemsSelected: newItemsSelected, goldNeeded: goldNeeded});
	}

	handleBuyItems = () => {
		this.props.transaction(this.state);
		this.setState({itemsSelected: [], goldNeeded: 0});
	}

	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.onClose}>
				<Modal.Header>
					<Modal.Title>Store</Modal.Title>
				</Modal.Header>
				<Modal.Body><h3>Khajiit has wares, if you have coins.</h3></Modal.Body>
				<Modal.Body>Your gold: {this.props.gold}</Modal.Body>
				<div className='item-block'>
					<ItemDisplay items={this.props.items} selected={this.handleItemSelected}/>
				</div>
				<div className='store-buttons'>
					<Button onClick={this.handleBuyItems} disabled={this.state.itemsSelected.length === 0 || this.state.goldNeeded > this.props.gold}>Buy</Button>
					<Button onClick={this.props.goback}>Go Back</Button>
				</div>
			</Modal>
		)
	}

}

export default Store;