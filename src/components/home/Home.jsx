import { Box, styled } from '@mui/material';
import React from 'react'
import Banner from './Banner';
import NavBar from './NavBar';

const Component = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`;
const Home = () => {
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home;