import React, {Component} from 'react';

const Iframe = (prop) => {
	iframe() {
		return {
			__html: props.iframe
		}
	},

	render (
		<div>
			<div dangerouslySetInnerHTML={this.iframe()} />
		</div>
		)
}

export default Iframe;