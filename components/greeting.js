import React from 'react';

export class Greeting extends React.Component {
	render() {
		return <p className="greeting">hello {this.props.name}</p>;
	}
}