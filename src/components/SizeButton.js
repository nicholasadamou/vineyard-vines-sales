import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 2px 18px;

	border: 2px solid #cccccc;

	color: #012960;
	font-weight: bold;

	width: 33%;

	cursor: pointer;
`;

const SizeButton = (props) => {
	const { size, setSize } = props

	return (
		<StyledButton onClick={() => { setSize(size); }}>
			{size.toUpperCase()}
		</StyledButton>
	)
}

export default SizeButton
