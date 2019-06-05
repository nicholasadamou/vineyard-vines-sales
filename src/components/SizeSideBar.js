import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components';

import SizeButton from './SizeButton';
import { getPageQueries } from '../utils/utils';

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

		this.state = {
			queries: []
		}

		this.setSize = this.setSize.bind(this);
	}

	setSize(size, isSelected) {
		let { queries } = this.state
		const prev = getPageQueries(this.props.history.location.search)

		// If the QueryString DOES NOT contain the selected size
		if (prev.size !== size) {
			// Check if the list of current queries contains more than 1 size
			// if (queries.length >= 1 && isSelected) {
			// 	 If yes, append '%20${size}'
			// 	queries.push(`%20${size}`)
			// 	if (isSelected) {
			// 		If yes, append '%20${size}'
			// 		queries.push(`%20${size}`)
			// 	} else {
			// 		this.setState({
			// 			queries: queries.filter(item => {
			// 				return item !== size
			// 			})
			// 		})

			// 		console.log("QUERIES => ", this.state.queries)
			// 	}
			// } else if (queries.length === 0 && isSelected) {
			// 	Else, append '${size}'
			// 	queries.push(`${size}`)
			// }
		}

		// Check if QueryString of size is empty
		// If yes, then remove it entirely
		const next = getPageQueries(this.props.history.location.search)
		if (next.size === "") {
			this.props.history.push('')
		}

		const qs = getPageQueries(this.props.history.location.search)
		//console.log(size, isSelected, qs, this.props)
	}

	render() {
		//console.log(getPageQueries(this.props.history.location.search))
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
