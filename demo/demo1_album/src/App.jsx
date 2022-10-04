import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography, Container, Grid, Button, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Box } from "@mui/system";

const customTheme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

const images = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random"];

const App = () => {
    return (<>

        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera
                        sx={{
                            marginRight: "20px",
                            color: "#ffffff",
                            width: '30px',
                            height: "30px"
                        }} />
                    <Typography variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            textTransform: "uppercase",
                            letterSpacing: 1
                        }} >
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Container maxWidth="sm">
                    <Typography variant="h3"
                        sx={{
                            margin: "60px 0",
                            textAlign: "center",
                            color: "#303030",
                            textTransform: "uppercase",
                            letterSpacing: 1
                        }}
                        gutterBottom>
                        Page Title
                    </Typography>
                    <Typography variant="h6"
                        align="center"
                        color="text.secondary"
                        paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                    <div>
                        <Grid container
                            sx={{
                                justifyContent: "center",
                                marginTop: "20px"
                            }}
                            spacing={2}>
                            <Grid item >
                                <Button variant="contained"
                                    color="primary">
                                    Button 1</Button>
                            </Grid>
                            <Grid item >
                                <Button variant="outlined"
                                    color="primary">
                                    Button 1</Button>
                            </Grid>

                        </Grid>
                    </div>
                </Container>
                <Container maxWidth="md">
                    <Grid container
                        spacing={4}
                        sx={{ padding: "80px 0" }}>
                        {
                            images.map((imgUrl) => (
                                <Grid item xs={12}
                                    sm={6} md={4}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column"
                                        }}>
                                        <CardMedia
                                            sx={{ paddingTop: "56.25%" }}
                                            image={imgUrl}
                                            title="Title"
                                            height="100" />
                                        <CardContent
                                            sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom
                                                variant="h5">
                                                Heading
                                            </Typography>
                                            <Typography >
                                                This is where you put the description for the card.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
            <Box sx={{ padding: "20px 0" }}>
                <Typography variant="h6"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: 1
                    }}
                    color="primary">
                    Footer
                </Typography>
                <Typography variant="subtitle1"
                    sx={{ textAlign: "center" }}
                    color="text.secondary">
                    This is a footer</Typography>
            </Box>
        </ThemeProvider>
    </>
    );
};

export default App;