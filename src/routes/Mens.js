import React, { Component } from 'react'

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
		functions.getProducts(getPageName()).then(data => {
			this.setState({
				data
			})
		})
	}

	componentDidUpdate() {
		const { size } = getPageQueries(this.props.location.search)

		functions.getProducts(getPageName(), size).then(data => {
			this.setState({
				data
			})
		})
	}

	render() {
		return (
			<Layout>

			</Layout>
		)
	}
}

export default Mens
