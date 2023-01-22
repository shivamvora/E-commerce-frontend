import { styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: 180
    }
}))

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Banner = () => {
    return (
        <Carousel responsive={responsive}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
        >
            {bannerData.map(data => (
                <Image src={data.url} alt="banner" key={data.id} />
            ))}
        </Carousel>
    )
}

export default Banner