import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import Products from "../components/Products";
import Loading from "../components/Loading";

import Context from "../context/Context";
import Layout from "../components/Layout";

const Warning = styled.p`
	display: grid;
	align-content: center;
	grid-auto-flow: row;
	grid-template-columns: auto auto auto;

	height: 100%;

	margin: 0 auto;
`;

const Womens = () => {
	const { loading, data, changePage } = useContext(Context);

	useEffect(() => {
		return () => {
			changePage();
		};
	}, [changePage]);

	return (
		<Layout>
			{loading ? 
    				<Loading />
    			 : 
    				data.length === 0 ? (
    					<Warning>
    						<span role='img' aria-label='warning'>
    							⚠️
    						</span>
    						There are no products to display.
    					</Warning>
    				) : (
    					<Products products={data} />
    				)}
		</Layout>
	);
};

export default Womens;
