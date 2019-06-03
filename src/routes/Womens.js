import React, { Component } from 'react'

import styled from 'styled-components'

import functions from '../functions/functions'
import Layout from '../components/Layout'

class Womens extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		functions.getProducts('sale-womens').then(data => {
			console.log(data)
		})
	}

	render() {
		return(
			<Layout>

			</Layout>
		)
	}
}

export default Womens
