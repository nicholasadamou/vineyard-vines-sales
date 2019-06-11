import React from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

import Products from '../components/Products'
import Loading from '../components/Loading'

import Context from '../context/Context'
import Layout from '../components/Layout'

const Warning = styled.p`
	display: grid;
	align-content: center;
	grid-auto-flow: row;
	grid-template-columns: auto auto auto;

	height: 100%;

	margin: 0 auto;
`

const Mens = () => {
	const { loading, data } = React.useContext(Context)

	return (
		<Layout>
			{!loading ? (
				data.length === 0 ? (
					<Warning>
						<span role="img" aria-label="warning">⚠️</span>
						There are no products to display.
					</Warning>
				) : (
					<Products products={data} />
				)
			) : (
				<Loading />
			)}
		</Layout>
	)
}

export default withRouter(Mens)
