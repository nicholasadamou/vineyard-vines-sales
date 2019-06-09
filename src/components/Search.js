import React, { Component } from 'react'

import styled from 'styled-components'

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			query: ''
		}

		this.search = this.search.bind(this)
	}

	handleChange(event) {
		this.setState({
			query: event.target.value.substr(0, 20)
		})
	}

	render() {
		const { query } = this.state

		return (
			<input type="text" value={query} onChange={this.handleChange.bind(this)}></input>
		)
	}
}

export default Search
