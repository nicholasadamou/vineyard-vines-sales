import React, { Component } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { getPageName } from '../utils/utils'

const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 9999;

	border-top: 1px solid #dedede;
	border-bottom: 1px solid #dedede;

	background: white;

	&.sticky {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
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

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {}

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({
			scroll: window.scrollY
		})
	}

	componentDidMount() {
		const {menu} = this

		this.setState({
			top: menu.offsetTop,
			height: menu.offsetHeight
		})

		window.addEventListener('scroll', this.handleScroll)
	}

	render() {
		const { scroll, top } = this.state

		const links = [
			{
				label: "Men's", to: '/mens-sale'
			},
			{
				label: "Women's", to: '/womens-sale'
			},
		]

		const items = links.map(link => {
			const isActive = getPageName() === link.to.substring(1)

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
			<MenuWrapper
				className={scroll > top ? 'sticky' : ''}
				ref={(menu) => (this.menu = menu)}
				{...this.props}
			>
				<NavWrapper>
					{items}
				</NavWrapper>
			</MenuWrapper>
		)
	}
}

export default Menu
