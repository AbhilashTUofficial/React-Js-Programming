import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Prices = () => {

    const offers = [
        {
            offer: "free",
            price: "$0",
            features: ["10 users included",
                "2 GB of storage",
                "Help center access",
                "Email support"],
            prompt: "Sign up for free"

        },
        {
            offer: "pro",
            price: "$15",
            features: ["10 users included",
                "2 GB of storage",
                "Help center access",
                "Email support"],
            prompt: "Get Started"

        },
        {
            offer: "enterprise",
            price: "$30",
            features: ["10 users included",
                "2 GB of storage",
                "Help center access",
                "Email support"],
            prompt: "Contact us"
        }
    ];

    return (
        <Container maxWidth="md" disableGutters>

            <Grid
                container
                alignItems="flex-end"
                spacing={6}
                sx={{ pt: "20px", pb: "60px" }}
            >
                {offers.map((obj) => (

                    <Grid item
                        key={obj.offer}
                        xs={12}
                        sm={obj.offer === "enterprise" ? 12 : 6}
                        md={4}>

                        <Card elevation={1}
                            sx={{
                                backgroundColor: "primary.main",
                                color: "primary.text",
                                borderRadius: "16px"
                            }}>

                            <CardHeader
                                title={obj.offer}
                                subheader={obj.offer === "pro" ? "Most popular" : ""}
                                subheaderTypographyProps={{
                                    align: 'center',
                                    color: "secondary.text",
                                    textTransform: "capitalize"
                                }}
                                sx={{
                                    backgroundColor: "#616161",
                                }}
                                titleTypographyProps={{
                                    align: 'center',
                                    fontWeight: "bold",
                                    color: "#3399ff",
                                    textTransform: "capitalize"

                                }}>

                            </CardHeader>

                            <CardContent>

                                <Box style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',

                                }}>
                                    <Typography
                                        sx={{
                                            fontSize: "36px",
                                            fontWeight: "bold"
                                        }}>
                                        {
                                            obj.price
                                        }

                                    </Typography>
                                    <Typography>/mo</Typography>

                                </Box>

                                {
                                    obj.features.map((feature) => (
                                        <Typography key={feature}
                                            sx={{
                                                display: "flex",
                                                align: "center",
                                                justifyContent: "center",
                                                fontSize: "18px",
                                                fontWeight: "bold"
                                            }}>
                                            {feature}
                                        </Typography>

                                    ))
                                }

                            </CardContent>
                            <CardActions
                                sx={{
                                    alignItems: "center",
                                    justifyContent: "center",

                                }}>
                                <Button
                                    fullWidth
                                    variant='outlined'

                                    sx={{
                                        '&:hover': {
                                            backgroundColor: obj.offer === "pro" ? "primary.title" : "primary.dim",

                                        },
                                        color: obj.offer === "pro" ? "primary.text" : "primary.title",
                                        borderColor: obj.offer === "pro" ? null : "primary.title",
                                        backgroundColor: obj.offer === "pro" ? "primary.title" : 'transparent',
                                        borderRadius: "12px"
                                    }}>{obj.prompt}

                                </Button>

                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Prices;