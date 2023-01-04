import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react'
import { useState } from 'react';

const Component = styled(Menu)`
    margin-top:5px;
`;
const Logout = styled(Typography)`
    font-size:14px;
    margin-left:20px;

`;

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false)
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const LogoutUser = () => {
        setAccount('')
    }
    return (
        <>
            <Box>
                <Typography onClick={handleClick} style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
                <Component
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <PowerSettingsNewIcon color='primary' fontSize='small' />
                        <Logout onClick={LogoutUser}>Logout</Logout>
                    </MenuItem>
                </Component>
            </Box>
        </>
    )
}

export default Profile;