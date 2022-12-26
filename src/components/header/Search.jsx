import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Searchcontainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
`;

const Search = () => {
    return (
        <Searchcontainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Searchcontainer>
    )
}

export default Search;