import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const MenuWrapper = styled.div`

`;

const Menu = () => {
	return (
		<MenuWrapper>
			<ul>
				<li>
					<Link to="/mens">Mens</Link>
				</li>
				<li>
					<Link to="/womens">Womens</Link>
				</li>
				<li>
					<Link to="/whale-of-a-sale">Whale of a Sale</Link>
				</li>
			</ul>
		</MenuWrapper>
	)
}

export default Menu
