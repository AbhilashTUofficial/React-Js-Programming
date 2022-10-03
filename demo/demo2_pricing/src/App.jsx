import React from "react";
import { CssBaseline, Typography, Container, Grid, Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Prices from "./Components/Prices";
import Footer from "./Components/Footer";


const customTheme = createTheme({
    palette: {

        primary: {
            main: "#0A1929",
            text: "#ffffff",
            title: "#3399ff",
            dim: "#226ab3"

        },
        secondary: {
            main: "#001E3C",
            text: "#c0c0c0"

        }
    },
});



const App = () => {
    return (<>

        <ThemeProvider theme={customTheme}>
            <CssBaseline />

            <NavBar />

            <div style={{ backgroundColor: "#001E3C" }}>

                <Banner />

                <Prices />

                <Footer />

            </div>

        </ThemeProvider>
    </>
    );
};

export default App;