import React from 'react';
class UserInfo extends React.Component {
	render() {
		return (
			<div>
				<div>
					<p> Name: {this.props.name} </p>
				</div>
				<div>
					<p> Email: {this.props.email} </p>
				</div>
			</div>
		)
	}
}

UserInfo.defaultProps = {
	name: "Van",
	email: "van@shopstack.asia"
}