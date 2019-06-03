import React, { Component } from 'react'

import Menu from './Menu'

class Mens extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		const { children } = this.props

		return(
			<div>
				<Menu />
				{ children }
			</div>
		)
	}
}

export default Mens
