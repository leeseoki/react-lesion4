import React, { Component } from 'react';

class EgState extends Component {
	constructor(props) {
		super(props);
		this.state = {seconds: 0}
	}

	render() {
		return (
			<div>
				<h1> Counter </h1>
				<h2> Seconds: {this.state.seconds} s</h2>
			</div>
		)
	}
}
export default EgState;
