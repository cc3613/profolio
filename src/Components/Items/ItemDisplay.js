import React, {Component} from 'react';

import Item from './Item';

import './ItemDisplay.css';

class ItemDisplay extends Component {
	render() {
		let items = Object.keys(this.props.items).map(item => <Item key={item} id={item} attri={this.props.items[item]} 
			                                                        selected={this.props.selected}></Item>);
		

		return (
			<div className='item-list'>
				{items}
			</div>
			)
	}
}

export default ItemDisplay;