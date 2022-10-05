import { Grid, TextField } from '@mui/material';
import React, { Component } from 'react';

class InputField extends Component {


    state = {};
    render() {

        return (
            <Grid item xs={this.props.xs} sm={this.props.sm}>
                <TextField fullWidth
                    required id="outlined-basic"
                    label={this.props.label}
                    variant="outlined" />
            </Grid>
        );
    }
}

export default InputField;

