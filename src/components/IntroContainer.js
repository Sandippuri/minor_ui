import styled from 'styled-components';
import React from 'react';


const TextContainer = styled.div`
    background-color:#D3D3D3;
    text-align: center;
    padding: 2rem 1.5rem;
    border-radius: 1rem;
    margin: 3rem 1rem   ;
    /* box-shadow: 10px 0px grey 1; */
    /* box-shadow: grey; */
    -webkit-box-shadow: 0 0 10px grey;
        box-shadow: 0 0 10px grey;
    `;
    const TextHeading = styled.h1`
    padding-bottom:1rem;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 3 rem;
    @media screen and (max-width:480px){
        
    }
    `;
    const Text = styled.p`
    font-size:1.25rem;
    @media screen and (max-width:480px){
        
    }
    `;

const IntroContainer = () => {

    return <>
    <div className="fluid-container my-2">
        <TextContainer>
            <TextHeading>Welcome to Old Image Regeneration</TextHeading>
            <Text>A simple and user friendly website which allows you to convert your old scratches photoes into high resolution and high quality like as new !! </Text>
        </TextContainer>

    </div>
    </>;
};

export default IntroContainer;
