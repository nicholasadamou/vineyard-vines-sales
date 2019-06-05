import React, { Component } from 'react';

import styled from 'styled-components';

import { getPageName, getPageQueries } from '../utils/utils'

const StyledButton = styled.button`
	padding: 2px 18px;
	margin: 5px 10px;

	border: 2px solid #cccccc;

	color: #012960;
	font-weight: bold;

	width: 70px;

	cursor: pointer;

	&:hover {
		color: white;
		background: #0f76ba;
	}
`;

class SizeButton extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}


	render() {
		const { size, setSize } = this.props

		// const currentSize = getPageQueries(window.location.search).size
		// const isSelected = currentSize === size

		return (
			<StyledButton
				id="sizeButton"
				onClick={() => {
					setSize(size);
				}}
			>
				{size.toUpperCase()}
			</StyledButton>
		)
	}
}

export default SizeButton
