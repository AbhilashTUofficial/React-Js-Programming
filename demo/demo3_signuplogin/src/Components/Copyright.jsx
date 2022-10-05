import { Typography } from '@mui/material';
import React, { Component } from 'react';

class CopyRight extends Component {
    state = {};
    render() {
        return (
            <Typography
                sx={{
                    mt: "30px",
                    fontSize: "14px",
                    Color: "#666666"
                }}>
                Copyright © Your Website 2022.
            </Typography>
        );
    }
}

export default CopyRight;