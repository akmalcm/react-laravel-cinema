import React from "react";
import Copyright from "../Copyright/Copyright";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return(
        <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Cinema
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Cinema
                </Typography>
                <Copyright />
            </Box>
    )
}
export default Footer;