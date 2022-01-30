import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
color: black;
text-align: center;
margin: 2rem 3rem;
`
const TextContainer = () => {
  return <>
 <div className="container">
  <Heading>Drag and Drop or Click on the area below to upload the file</Heading>

 </div>
  </>;
};

export default TextContainer;
