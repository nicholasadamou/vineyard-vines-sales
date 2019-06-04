import React, { Component } from 'react'

import styled from 'styled-components';

import SizeButton from './SizeButton';

const SideBarWrapper = styled.div`
	position: absolute;
	left: 10px;

	width: 25%;

	h4 {
		margin: 0;
	}

	hr {
		height: 1px;
		border: 0;

		color: #dedede;
		border-color: #dedede;
		background-color: #dedede;
	}
`;

const ButtonsWrapper = styled.div`

`;

class SizeSideBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ''
		}

		this.setSize.bind(this);
	}

	setSize(size='') {
		this.setState({
			size
		});
	}

	render() {
		const { size } = this.state;
		console.log("SIZE: ", size);

		return (
			<SideBarWrapper>
				<h4>Size</h4>
				<hr />
				<ButtonsWrapper>
					<SizeButton size="x" setSize={this.setSize} />
					<SizeButton size="xxs" setSize={this.setSize} />
					<SizeButton size="xs" setSize={this.setSize} />
					<SizeButton size="s" setSize={this.setSize} />
					<SizeButton size="m" setSize={this.setSize} />
					<SizeButton size="l" setSize={this.setSize} />
					<SizeButton size="xl" setSize={this.setSize} />
					<SizeButton size="xxl" setSize={this.setSize} />
					<SizeButton size="2xl" setSize={this.setSize} />
					<SizeButton size="3xl" setSize={this.setSize} />
					<SizeButton size="4xl" setSize={this.setSize} />
				</ButtonsWrapper>
			</SideBarWrapper>
		)
	}
}

export default SizeSideBar
