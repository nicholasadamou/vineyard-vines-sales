import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 10px 0;

  height: 30px;
  width: 100vw;

  font-size: 14px;

  background-color: #002A5C;
  color: white;

  a {
	color: white;
  }
`;

const Banner = (props) => (
	<Container {...props}>
		{props.text()}
	</Container>
)

export default Banner;
