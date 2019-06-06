import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

import SizeSideBar from '../components/SizeSideBar'

import { getPageName } from '../utils/utils'

import functions from '../functions/functions'
import Layout from '../components/Layout'

class WhaleOfASale extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			sizes: []
		}
	}

	componentDidMount() {
		functions.getProducts(getPageName(), this.state.sizes).then(data => {
			this.setState({
				data
			}, () => {
				console.log(data);
			})
		})
	}

	render() {
		const { sizes } = this.state
		
		return (
			<Layout>
				<SizeSideBar sizes={sizes} />
			</Layout>
		)
	}
}

export default withRouter(WhaleOfASale)
