import React from 'react'

import styled from 'styled-components'

import whaleicon from '../assets/svg/whale-icon.svg'

const HeaderWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;

	height: 10vh;

	padding: 20px 30px;

	background-color: #f8f8f8;

	h3, h1 {
		margin: 0;
		padding: 0;

		text-transform: uppercase;
	}

	h3 {
		color: #f40000;
		font-size: 24px;
	}

	h1 {
		position: relative;

		color: #012960;
		font-size: 40px;

		img {
			position: absolute;
			bottom: 0px;
			left: 95px;
		}
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<h3>Shop</h3>
			<h1>Sale <img src={whaleicon} alt="whale-icon" /></h1>
		</HeaderWrapper>
	)
}

export default Header
