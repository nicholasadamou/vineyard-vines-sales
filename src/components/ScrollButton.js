import React, { Component } from 'react'

import styled from 'styled-components'

import UpArrow from '@material-ui/icons/ArrowUpward';
import Tooltip from '@material-ui/core/Tooltip';

const Link = styled.a`
	position: fixed;
	bottom: 35px;
    right: 50px;

	border: none;

	cursor: pointer;

	z-index: 9999;
`;

class ScrollButton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			interval: 0
		}
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.interval)
		}

		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
	}

	scrollToTop() {
		let interval = setInterval(this.scrollStep.bind(this), this.props.delayInMs)

		this.setState({
			interval
		});
	}

	render() {
		return (
			<Tooltip title="Scroll back to the top.">
				<Link onClick={() => { this.scrollToTop() }}>
					<UpArrow />
				</Link>
			</Tooltip>
		)
	}
}

export default ScrollButton
