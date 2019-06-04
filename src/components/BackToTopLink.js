import React from 'react'

import styled from 'styled-components'

import backToTop from '../assets/png/back-to-top.png'

const Link = styled.a`
	position: fixed;
	bottom: 5px;
	right: 5px;

	text-decoration: none;
`;

const BackToTopLink = () => {
	return (
		<Link href="#top">
			<img src={backToTop} alt="Back to top link" />
		</Link>
	)
}

export default BackToTopLink
