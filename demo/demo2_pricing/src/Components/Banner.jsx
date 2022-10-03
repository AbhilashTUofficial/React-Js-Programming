import { Container, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                backgroundColor: "secondary.main"
            }} >

            <Typography
                variant="h3"
                sx={{
                    pt: "60px",
                    pb: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "primary.text",
                    textTransform: "capitalize",
                }}
                gutterBottom>
                Pricing
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    align: "center",
                    fontWeight: "bold",
                    color: "secondary.text",
                    textAlign: "center",
                    textTransform: "capitalize"
                }}

                paragraph>
                Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
            </Typography>

        </Container>
    );
};

export default Banner;