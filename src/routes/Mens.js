import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

import { getPageName, getPageQueries } from '../utils/utils'

import functions from '../functions/functions'
import Layout from '../components/Layout'

class Mens extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount() {
		const { size } = getPageQueries(this.props.location.search)

		if (size != null) {
			functions.getProducts(getPageName(), size).then(data => {
				this.setState({
					data
				}, () => {
					console.log(data);
				})
			})
		} else {
			functions.getProducts(getPageName()).then(data => {
				this.setState({
					data
				}, () => {
					console.log(data);
				})
			})
		}
	}

	// componentDidUpdate() {
	// 	const { size } = getPageQueries(this.props.location.search)

	// 	functions.getProducts(getPageName(), size).then(data => {
	// 		this.setState({
	// 			data
	// 		})
	// 	})
	// }

	render() {
		return (
			<Layout>

			</Layout>
		)
	}
}

export default withRouter(Mens)
