import React, { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MovieIcon from '@mui/icons-material/Movie';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    NavLink
} from "react-router-dom";

import Home from "../Home/Home";

const Navigation = (props) => {
    return (
        <AppBar position="fixed" sx={{ bgcolor: 'salmon' }}>
            <Toolbar>
                <MovieIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Cinema
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <NavLink to={'/'} style={{textDecoration:'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block'}}>
                            Home
                        </Button>
                    </NavLink>
                    <NavLink to={'/purchases'} style={{textDecoration:'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            Purchases
                        </Button>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Navigation;