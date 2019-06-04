import React from 'react'

import styled from 'styled-components'

import backToTop from '../assets/png/back-to-top.png'

const Link = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;

	border: none;
`;

class ScrollButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			interval: 0
		};
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.interval);
		}

		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let interval = setInterval(this.scrollStep.bind(this), this.props.delayInMs);

		this.setState({
			interval
		});
	}

	render() {
		return (
			<Link onClick={() => { this.scrollToTop(); }}>
				<img src={backToTop} alt="Back to top link" />
			</Link>
		)
	}
}

export default ScrollButton
