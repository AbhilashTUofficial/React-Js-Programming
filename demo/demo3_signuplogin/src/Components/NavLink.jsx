import { Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navlink extends Component {
    state = {};
    render() {
        return (
            <Link
                sx={{ fontSize: "14px", }} to={this.props.to}>
                <Typography sx={{ fontSize: "14px", }}>
                    {this.props.prompt}
                </Typography>
            </Link>
        );
    }
}

export default Navlink;