import React from 'react';

import { map } from 'ramda';
import styled from 'styled-components'

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    margin-left: 325px;
    margin-top: 30px;
`

const Product = styled.div`
    margin: 10px;

    a {
        text-decoration: none;

        img {
            width: 50%;
        }
    }
`

const Name = styled.p`
    font-size: 18px;
    color: #002A5C;
`

const SalePrice = styled.span`
    font-size: 16px;
    color: #E12A05;
    margin-right: 10px;
`
const OriginalPrice = styled.span`
    font-size: 16px;
    color: black;
    text-decoration: line-through;
`

const Products = (props) => {
    const item = product => {
        return (
            <Product key={product.title}>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <img src={product.image} alt={product.title} />
                    <Name>{product.title}</Name>
                    <SalePrice>${product.sale_price}</SalePrice>
                    <OriginalPrice>${product.original_price}</OriginalPrice>
                </a>
            </Product>
        )
    }

    return (
        <ProductsWrapper>
            {map(item, props.products)}
        </ProductsWrapper>
    )
}

export default Products