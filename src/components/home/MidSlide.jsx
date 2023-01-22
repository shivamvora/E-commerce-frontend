import { Box, styled } from '@mui/material';
import React from 'react'
import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
        }
    }
}))
const RightComponent = styled(Box)(({ theme }) => ({
    background: '#ffffff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))
    ;
const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt='ad' style={{ width: 225 }} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide;