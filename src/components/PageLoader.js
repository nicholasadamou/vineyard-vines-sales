import React from 'react'

import styled from 'styled-components'

import CircularProgress from '@material-ui/core/CircularProgress'

const ProgressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
`

const PageLoader = () => (
	<ProgressWrapper>
		<CircularProgress />
	</ProgressWrapper>
)

export default PageLoader
