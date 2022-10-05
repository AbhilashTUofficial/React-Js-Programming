import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React, { Component } from 'react';

class CustomCheckBox extends Component {
    state = {};
    render() {
        return (
            <Grid item xs={12} sm={12}>
                <FormControlLabel
                    label={this.props.label}
                    control={
                        <Checkbox
                            checked={this.props.checked}
                            onChange={this.props.onChange} />}
                />
            </Grid>
        );
    }
}

export default CustomCheckBox;