import React from 'react'

import styled from 'styled-components'

import whaleicon from '../assets/svg/whale-icon-grey.svg'

const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;

	height: 35vh;

	padding-bottom: 60px;

	background-color: #f8f8f8;
	color: #DEDEDE;

	#footer__logo {
		width: 166px;
		height: 52px;
		filter: grayscale(100%);
		opacity: 0.5;
	}

	p {
		position: relative;

		text-transform: uppercase;

		img {
			position: absolute;
			bottom: 0px;
		}
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<img src="https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw89695fd1/images/logos/logo@2.6x.png" alt="logo" id="footer__logo" />
			<p>Every day should feel good.<img src={whaleicon} alt="whale-icon" /></p>
			<small>&copy; {new Date().getFullYear()} Vineyard Vines. All rights reserved.</small>
		</FooterWrapper>
	)
}

export default Footer
