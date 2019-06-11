import React from 'react';

export class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(index) {
		this.setState({selected: index});
	}
	
	render() {
		return <ul>
			{this.props.items.map((i) => {
				return <Item key={i} label={i} onClick={this.handleClick}selected={i===this.state.selected}/>;
			})}
		</ul>;
	}
}

function Item(props) {
	const classNames = props.selected ? "selected" : "";
	return <li className={classNames} onClick={() => props.onClick(props.label)}>{props.label}</li>;
}