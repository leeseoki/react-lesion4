import React, { Component } from 'react';

class UserInfo extends Component {
	render() {
		return (
			<div>
				<h1>Name: {this.props.name}</h1>
				<h1>Email: {this.props.email}</h1>
			</div>
		)
	}
}

UserInfo.defaultProps = {
	name: 'Van',
	email: 'van@shopstack.asia'
}

export default UserInfo;