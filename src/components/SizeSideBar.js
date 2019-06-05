import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components';

import SizeButton from './SizeButton';

const SideBarWrapper = styled.div`
	position: absolute;
	left: 30px;

	width: 280px;

	h3 {
		margin: 0;

		color: #002960;
		text-transform: uppercase;
	}

	hr {
		height: 2px;
		border: 0;

		background-color: #dedede;
	}
`;

const ButtonsWrapper = styled.div`
	margin-left: -10px;
	margin-top: 24px;
`;

class SizeSideBar extends Component {
	constructor(props) {
		super(props);

		this.setSize = this.setSize.bind(this);
	}

	setSize(size) {
		this.props.history.push(`?size=${size}`)
	}

	render() {
		return (
			<SideBarWrapper>
			<h3>Size</h3>
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

export default withRouter(SizeSideBar)
