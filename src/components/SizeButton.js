import React, { Component } from 'react';

import styled from 'styled-components';
import Context from '../context/Context';

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
			<Context.Consumer>
				{ctx => {
					return (
						<StyledButton
							className={isSelected ? 'selected' : ''}
							onClick={() => {
								this.isSelected();
								setSize(ctx.sizes, size, !this.state.isSelected);
							}}
						>
							{size.toUpperCase()}
						</StyledButton>
					)
				}}
			</Context.Consumer>
		)
	  }
}

export default SizeButton
