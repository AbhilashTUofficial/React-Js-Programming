import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography, Container, Grid, Box, Link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'


const customTheme = createTheme({
    palette: {
     
        primary: {
            main:"#0A1929",
            
        },
        secondary:{
            main:"#001E3C"
        }
    },
});



const App = () => {
    return (<>

        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1, color: "white", textTransform: 'capitalize' }} >
                        Company name
                    </Typography>

                    <nav>
                        
                        <Link  underline='none'  variant="button" color="#ffffff" href="#" sx={{my:1,mx:1.5/* my: margin-y, mx: margin-x */,textTransform:'capitalize'}}>Features</Link>
                        <Link  underline='none'  variant="button" color="#ffffff" href="#" sx={{my:1,mx:1.5/* my: margin-y, mx: margin-x */,textTransform:'capitalize'}}>Enterprise</Link>
                        <Link  underline='none'  variant="button" color="#ffffff" href="#" sx={{my:1,mx:1.5/* my: margin-y, mx: margin-x */,textTransform:'capitalize'}}>Support</Link>

                    </nav>
                    
                </Toolbar>
            
            </AppBar>

            <main >
                <Container maxWidth="sm" >
                    <Typography variant="h3" sx={{ margin:"60px 0", textAlign: "center", color: "#303030", textTransform: "uppercase", letterSpacing: 1 }} gutterBottom>
                        Page Title
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                   
                </Container>
                <Container maxWidth="md">
                    <Grid container spacing={4} sx={{ padding: "20px 0" }}>
                       
                    </Grid>
                </Container>
            </main>
            <Box sx={{padding:"20px 0"}}>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }} color="text.secondary">Copyright © Your Website 2022.</Typography>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default App;