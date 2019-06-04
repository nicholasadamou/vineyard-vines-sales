import React, { Component } from 'react'

import styled from 'styled-components'

import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import BackToTopLink from './BackToTopLink'

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 30px;

	img {
		width: 231px;
		height: 72px;
		max-width: 100%;
	}
`;

class Mens extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		const { children } = this.props

		return(
			<div>
				<HeaderWrapper>
					<img src="https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw89695fd1/images/logos/logo@2.6x.png"  alt="logo" />
				</HeaderWrapper>
				<Menu />
				<Header />
				{ children }
				<BackToTopLink />
				<Footer />
			</div>
		)
	}
}

export default Mens
