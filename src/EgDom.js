import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EgDom extends Component {
	constructor() {
		super();
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	}

	findDomNodeHandler() {
		var name = document.getElementById('name');
		ReactDOM.findDOMNode(name).style.color = 'red';
	}

	render() {
		return (
			<div>
				<button onClick = {this.findDomNodeHandler}>Change Color</button>
				<div id="name">Node</div>
			</div>
		)
	}
}

export default EgDom;