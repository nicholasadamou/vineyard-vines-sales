import React, { Component } from 'react';

import { getPageQueries } from '../utils/utils'

import styled from 'styled-components';

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
		background: #002b5c;
	}
`;

class SizeButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSelected: false
		}
	}

	isSelected = () => {
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
			  this.isSelected();
			  setSize(size);
			}}
		  >
			{size.toUpperCase()}
		  </StyledButton>
		)
	  }
}

export default SizeButton
