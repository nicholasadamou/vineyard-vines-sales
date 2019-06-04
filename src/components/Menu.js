import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { getPageState } from '../utils/utils'

const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	border-top: 2px solid #dedede;
	border-bottom: 2px solid #dedede;
`;

const NavWrapper = styled.nav`
	margin: 0;

	a {
		display: inline-block;

		padding: 12px 14px;

		text-decoration: none;

		color: black;
		font-weight: medium;

		transition: 5ms ease-in-out;

		&.menu__item-active {
			background-color: #007fba;
			color: white;
			font-weight: bold;
		}

		&[href="/whale-of-a-sale"] {
			color: #f50000;

			&.menu__item-active, &:hover {
				background-color: #f50000;
				color: white;
				font-weight: bold;
			}
		}

		&:hover {
			background-color: #007fba;
			color: white !important;
			font-weight: bold;
		}
	}
`;

const Menu = () => {
	const links = [
		{
			label: "Men's", to: '/mens'
		},
		{
			label: "Women's", to: '/womens'
		},
		{
			label: 'Whale of a Sale', to: '/whale-of-a-sale'
		}
	]

	const items = links.map(link => {
		const isActive = getPageState() === link.to.substring(1)

		return (
			<Link
				key={link.to}
				to={link.to}

				className={ isActive ? 'menu__item-active' : '' }
			>
					{link.label}
			</Link>
		)
	})


	return (
		<MenuWrapper>
			<NavWrapper>
				{items}
			</NavWrapper>
		</MenuWrapper>
	)
}

export default Menu
