import React, { Component } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


class Logo extends Component {
    state = {};
    render() {
        return (
            <div
                style={{
                    background: "#9C27B0",
                    width: "40px",
                    height: "40px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "12px"
                }}>
                <LockOutlinedIcon
                    sx={{ color: "primary.light" }} />

            </div>
        );
    }
}

export default Logo;