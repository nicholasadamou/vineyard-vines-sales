import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components';

import SizeButton from './SizeButton';

const SideBarWrapper = styled.div`
    position: absolute;
    top: 18em;
	left: 0;
	
	margin-top: 40px;
	margin-left: 30px;

	width: 260px;

	&.sticky {
		position: fixed;
		top: 2rem;
		left: 0;
		width: 260px;
	}

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
		super(props)

		this.state = {}

		this.handleScroll = this.handleScroll.bind(this)
	}

	handleScroll() {
		this.setState({
			scroll: window.scrollY
		})
	}

	componentDidMount() {
		const sidebar = document.getElementById('size-side-bar')

		this.setState({
			top: sidebar.offsetTop,
			height: sidebar.offsetHeight
		})

		window.addEventListener('scroll', this.handleScroll)
	}

	render() {
		const { scroll, top } = this.state
		const { setSize } = this.props

		return (
			<SideBarWrapper 
				className={scroll > top ? 'sticky' : ''} id="size-side-bar"
			>
			<h3>Size</h3>
			<hr />
				<ButtonsWrapper>
					<SizeButton size="x" setSize={setSize} />
					<SizeButton size="xxs" setSize={setSize} />
					<SizeButton size="xs" setSize={setSize} />
					<SizeButton size="s" setSize={setSize} />
					<SizeButton size="m" setSize={setSize} />
					<SizeButton size="l" setSize={setSize} />
					<SizeButton size="xl" setSize={setSize} />
					<SizeButton size="xxl" setSize={setSize} />
					<SizeButton size="2xl" setSize={setSize} />
					<SizeButton size="3xl" setSize={setSize} />
					<SizeButton size="4xl" setSize={setSize} />
				</ButtonsWrapper>
			</SideBarWrapper>
		)
	}
}


export default withRouter(SizeSideBar)