import React from 'react';
import styled from 'styled-components';

const Container =styled.div`
height: 30px;
background-color:skyBlue;
color:black;
display:flex;
align-items:center;
justify-content:center;
font-size:15px;
font-weight:500;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal ! Free Shipping on Orders Over $55
        </Container>
    );
};

export default Announcement;