import React, { Component } from 'react'

import Context from './Context'

import functions from '../functions/functions'

import {
	getPageName,
	isMobile
} from '../utils/utils'

class Provider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			data: [],
			sizes: [],
			isMobile: isMobile.any(),
			handleOnPageChange: () => {
				// Get the page name (e.g. 'sale-mens' or 'sale-womens')
				const pageName = getPageName()

				// Currently fetching data
				this.setState({
					loading: true
				})

				functions.getProducts(pageName, this.state.sizes).then(data => {
					this.setState({
						data,
						loading: false // data fetching finished
					}, () => {
						console.log(pageName, data)
					})
				})
			},
			setSize: (sizes, size, isSelected) => {
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
		}
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

	render() {
		const { children } = this.props

		return (
			<Context.Provider value={this.state}>
				{ children }
			</Context.Provider>
		)
	}
}

export default Provider
