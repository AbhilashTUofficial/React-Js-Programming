import React, { Component } from 'react';
import { Container, Grid, Typography } from "@mui/material";
import InputField from "./Components/InputField";
import SignButton from './Components/SignButton';
import CopyRight from './Components/Copyright';
import Logo from './Components/Logo';
import Navlink from './Components/NavLink';
import CustomCheckBox from './Components/CheckBox';



class LogInPage extends Component {
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

                <Typography variant="h5" sx={{ mt: "6px", mb: "12px" }}>Sign in</Typography>

                <Grid container spacing={2}>


                    <InputField label={"Email Address"} xs={12} sm={12} />

                    <InputField label={"Password"} xs={12} sm={12} />
                    <CustomCheckBox
                        label={"Remeber me"}
                        checked={this.props.checked}
                        onChange={this.props.checkHandler} />

                    <SignButton prompt={"sign in"} />

                </Grid>

                <Grid container spacing={6} >
                    <Grid item xs={12} sm={5}>

                        <Navlink to={"/"} prompt={"Forgot password?"} />

                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Navlink to={"/"} prompt={"Don't have an account? Sign Up"} />
                    </Grid>


                </Grid>

                <CopyRight />
            </Container >
        );
    }
}

export default LogInPage;





/* <Box
    sx={{
        mt: "16px",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between"
        // alignSelf: "stretch",
    }}>
    <Link
        sx={{ fontSize: "14px", }} to="/">
        Forgot password?</Link>
    <Link
        sx={{ fontSize: "14px", }} to="/">
        Already have an account? Sign in</Link>

</Box> */
