import { Button, Grid } from '@mui/material';
import React, { Component } from 'react';

class SignButton extends Component {
    state = {};
    render() {
        return (
            <Grid item xs={12} sm={12}>
                <Button variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "primary.main",
                        Color: "primary.light",
                        my: "6px"
                    }}>
                    {this.props.prompt}
                </Button>
            </Grid>
        );
    }
}

export default SignButton;