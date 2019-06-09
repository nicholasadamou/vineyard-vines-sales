import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

import { getPageName } from '../utils/utils'

import SizeSideBar from '../components/SizeSideBar'
import Products from '../components/Products'
import Loading from '../components/Loading'

import functions from '../functions/functions'
import Layout from '../components/Layout'

const Warning = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

class Womens extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			sizes: [],
			loading: false
		}

		this.setSize = this.setSize.bind(this);
	}

	componentDidMount() {
		// Currently fetching data
		this.setState({
			loading: true
		})

		functions.getProducts(getPageName(), this.state.sizes).then(data => {
			this.setState({
				data,
				loading: false // data fetching finished
			}, () => {
				console.log(getPageName(), data)
			})
		})
	}

	setSize(size, isSelected) {
		let { sizes } = this.state

		// Currently fetching data
		this.setState({
			loading: true
		})

		// If the list of current sizes does NOT contain this size
		// and if the size is NOT selected
		if (!sizes.includes(size) && isSelected) {
			// Then, add the size to the list of sizes
			console.log(`ADDED=${size}`)
			sizes.push(`${size}`)

		// If the size IS included w/in the list of sizes,
		// but is no longer selected
		} else if (sizes.includes(size) && !isSelected) {
			// remove the size from the list
			let index = sizes.indexOf(size);
			if (index !== -1) sizes.splice(index, 1);
			console.log(`REMOVED=${size}`)
		}

		functions.getProducts(getPageName(), sizes).then(data => {
			this.setState({
				data,
				sizes,
				loading: false // data fetching finished
			}, () => {
				console.log(getPageName(), data)
			})
		})

		console.log(`sizes=${sizes} isSelected=${isSelected}`)
	}

	render() {
		const { data, sizes, loading } = this.state

		return (
			<Layout>
				<SizeSideBar sizes={sizes} setSize={this.setSize} />
				{loading ? (
					<Loading />
				) : (
					data.length === 0 ? (
						<Warning>
							<span role="img" aria-label="warning">⚠️</span>
							There are no products to display.
						</Warning>
					) : (
						<Products products={this.state.data} />
					)
				)}
			</Layout>
		)
	}
}

export default withRouter(Womens)
