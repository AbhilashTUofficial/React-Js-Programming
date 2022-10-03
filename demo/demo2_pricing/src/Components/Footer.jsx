import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {

    const list = [
        { title: "Company", listItems: ["Team", "History", "Contact us", "Locations"] },
        { title: "Features", listItems: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"] },
        { title: "Resources", listItems: ["Resource", "Resource name", "Another", "resource", "Final resource"] },
        { title: "Legal", listItems: ["Privacy policy", "Terms of use"] },

    ];

    return (
        <Container
            maxWidth="md"
            sx={{
                pt: "60px",
                borderTop: "1px solid rgb(190 224 255 / 0.08)"
            }}>

            <Grid container spacing={6} sx={{ justifyContent: "space-evenly" }}>
                {
                    list.map((items) => (
                        <Grid
                            item sm={3}
                            xs={6} >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "primary.text",
                                        fontSize: "20px",
                                    }}>
                                    {items.title}
                                </Typography>

                                {items.listItems.map((item) => (
                                    <Link
                                        underline='none'
                                        variant="text"

                                        sx={{
                                            '&:hover': {
                                                color: "primary.dim",
                                            },
                                            color: "secondary.text",
                                        }}>
                                        <Typography>
                                            {item}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                    ))}
            </Grid>

            <Box
                sx={{
                    padding: "20px 0"
                }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        textAlign: "center"
                    }}
                    color="secondary.text">
                    Copyright © Your Website 2022.
                </Typography>
            </Box>

        </Container>
    );
};

export default Footer;