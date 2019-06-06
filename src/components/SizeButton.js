import React, { Component } from 'react';

import { getPageQueries } from '../utils/utils'

import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 2px 18px;
	margin: 5px 10px;

	border: 2px solid #cccccc;

	color: #012960;
	font-size: 14px;
	font-weight: bold;

	width: 70px;

	cursor: pointer;

	&:hover {
		color: white;
		background: #002b5c;
	}

	&.selected {
		border: 1px solid white !important;
		color: white !important;
		background: #002b5c;
		box-shadow: 0 0 0 2px #002b5c;

		&:hover {
			color: #002b5c !important;
			background: white !important;
		}
	}
`;

class SizeButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSelected: false
		}
	}

	isSelected = (size, setSize) => {
		this.setState({
			isSelected: !this.state.isSelected
		})
	}

	render() {
		const { size, setSize } = this.props;
		const { isSelected } = this.state;

		return (
		  <StyledButton
			className={isSelected ? 'selected' : ''}
			onClick={() => {
			  this.isSelected(setSize);
			  setSize(size, !this.state.isSelected);
			}}
		  >
			{size.toUpperCase()}
		  </StyledButton>
		)
	  }
}

export default SizeButton
