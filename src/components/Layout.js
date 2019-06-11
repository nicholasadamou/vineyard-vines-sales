import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Context from '../context/Context'

import Menu from './Menu'
import Header from './Header'
import SizeSideBar from './SizeSideBar'
import ScrollButton from './ScrollButton'
import Footer from './Footer'
import Mobile from './Mobile'

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	margin: 0 150px;
`;

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

const Layout = (props) => {
	const { children } = props
	const { isMobile, data, sizes, setSize, loading } = React.useContext(Context)

	return (
		<div>
			{!isMobile ? (
				<ContentWrapper className="content">
					<HeaderWrapper>
						<Link to="/">
							<img src="https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw89695fd1/images/logos/logo@2.6x.png"  alt="logo" />
						</Link>
					</HeaderWrapper>
					<Menu />
					<Header />
					<SizeSideBar
						data={data}
						sizes={sizes}
						setSize={setSize}
						loading={loading}
					/>
					{ children }
					<ScrollButton scrollStepInPx="50" delayInMs="8" />
					<Footer />
				</ContentWrapper>
			) : (
				<Mobile />
			)}
		</div>
	)
}

export default Layout
