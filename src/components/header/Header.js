import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
import CustomButton from './CustomButton';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`
const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
`;

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;

const SubImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
})


const CustomButtonWrapper = styled(Box)`
    margin:0 5px 0 auto;
`;

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box style={{ color: '#FFE500' }} component='span'>Plus</Box>
                        </SubHeading>
                        <SubImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;