import React from 'react';
import styled from 'styled-components';

const CovidAlert = () => {
    return (
        <>
            <div>
                <Banner href='/support'><Text>Morgan Ashley during COVID-19</Text></Banner>
            </div>
        </>
    )
}

export default CovidAlert;

const Banner = styled.a`
    background-color: purple;
    width: 100%;
    height: auto;
    display: block;
    text-align: center;

    &:hover {
        background-color: #301934;
        cursor: pointer;
    }
`

const Text = styled.h5`
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: .5px;
    padding: 6px 24px;
`