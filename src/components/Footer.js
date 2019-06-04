import React from 'react'

import styled from 'styled-components'

import whaleicon from '../assets/svg/whale-icon-grey.svg'

const FooterWrapper = styled.div`
	height: 20vh;
	background-color: #f8f8f8;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<img src={whaleicon} alt="whale-icon" />
		</FooterWrapper>
	)
}

export default Footer
