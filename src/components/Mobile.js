import React from 'react'

import styled from 'styled-components'

import { getPageURL } from '../utils/utils'

import logo from '../assets/png/logo.png'

const MobileWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    padding-left: 15px;

    background-color: #f8f8f8;

	img {
		margin-bottom: 10px;
	}

    h2 {
        margin: 5px 0;

		a {
			color: #E12A05;
			text-decoration: underline;
		}
    }

	h2, p {
		font-size: 9px;
	}
`;

const Mobile = () => {
    return (
        <MobileWrapper>
            <img
                src={logo}
                alt="logo"
                width="180"
            />
            <h2>
                <span role="img" aria-label="warning">⚠️</span> Please visit <em><a href={getPageURL()}>{getPageURL()}</a></em> on a <span role="img" aria-label="desktop-computer">🖥️</span> browser!
            </h2>
            <p><em>This page is <strong><u>not</u></strong> ment to be viewed on a mobile device!</em></p>
        </MobileWrapper>
    )
}

export default Mobile
