import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import { getPageName } from '../utils/utils'

import SizeSideBar from '../components/SizeSideBar'
import Products from '../components/Products'

import functions from '../functions/functions'
import Layout from '../components/Layout'

class Mens extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			sizes: []
		}

		this.setSize = this.setSize.bind(this);
	}

	componentDidMount() {
		functions.getProducts(getPageName(), this.state.sizes).then(data => {
			this.setState({
				data
			}, () => {
				console.log(getPageName(), data)
			})
		})
	}

	setSize(size, isSelected) {
		let { sizes } = this.state
		
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
				sizes
			}, () => {
				console.log(getPageName(), data)
			})
		})

		console.log(`sizes=${sizes} isSelected=${isSelected}`)
	}

	render() {
		const { sizes } = this.state

		return (
			<Layout>
				<SizeSideBar sizes={sizes} setSize={this.setSize} />
				<Products products={this.state.data} />
			</Layout>
		)
	}
}

export default withRouter(Mens)
