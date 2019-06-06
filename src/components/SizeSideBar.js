import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components';

import SizeButton from './SizeButton';
import { getPageName, getPagesizes } from '../utils/utils';

import functions from '../functions/functions'

const SideBarWrapper = styled.div`
	margin-top: 40px;
    margin-left: 30px;

	width: 260px;

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
	margin-top: 20px;
`;

class SizeSideBar extends Component {
	constructor(props) {
		super(props);

		this.setSize = this.setSize.bind(this);
	}

	setSize(size, isSelected) {
		let { sizes } = this.props
		
		// If the list of current sizes does NOT contain this size
		// and if the size is NOT selected
		if (!sizes.includes(size) && isSelected) {
			// Then, add the size to the list of sizes
			console.log(`ADDED=${size}`)
			sizes.push(`${size}`)

		// If the size IS included w/in the list of sizes,
		// but is no longer selected
		} else if (sizes.includes(size) && !isSelected) {
			// remove the size from the list
			let index = sizes.indexOf(size);
			if (index !== -1) sizes.splice(index, 1);
			console.log(`REMOVED=${size}`)
		}

		functions.getProducts(getPageName(), sizes).then(data => {
			console.log(data)
		})

		console.log(`sizes=${sizes} isSelected=${isSelected}`)
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
