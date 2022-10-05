import React, { Component } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import InputField from "./Components/InputField";
import SignButton from './Components/SignButton';
import CopyRight from './Components/Copyright';
import CustomCheckBox from './Components/CheckBox';
import Logo from './Components/Logo';
import Navlink from './Components/NavLink';



class SignUpPage extends Component {
    state = {};

    render() {
        return (
            <Container
                maxWidth="xs"
                sx={{
                    mt: "60px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }} >

                <Logo />

                <Typography variant="h5" sx={{ mt: "6px", mb: "12px" }}>Sign up</Typography>

                <Grid container spacing={2}>

                    <InputField label={"First Name"} xs={12} sm={6} />

                    <InputField label={"Last Name"} xs={12} sm={6} />

                    <InputField label={"Email Address"} xs={12} sm={12} />

                    <InputField label={"Password"} xs={12} sm={12} />

                    <CustomCheckBox
                        label={"I want to receive inspiration, marketing promotions and updates via email."}
                        checked={this.props.checked}
                        onChange={this.props.checkHandler} />
                    <SignButton prompt={"sign up"} />
                </Grid>
                <Box
                    sx={{
                        mt: "16px",
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "flex-end"
                    }}>
                    <Navlink to={"/log-in"} prompt={"Already have an account? Sign in"} />

                </Box>

                <CopyRight />
            </Container>
        );
    }
}

export default SignUpPage;