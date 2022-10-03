import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';


const NavBar = () => {

    const tabs = ["Features", "Enterprise", "Support"];

    return (
        <>
            <AppBar position="relative"
                elevation={0}
                sx={{
                    borderBottom: "1px solid rgb(190 224 255 / 0.08)"
                }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            color: "white",
                            textTransform: 'capitalize'
                        }} >
                        Company name
                    </Typography>
                    <div>
                        {tabs.map((tab) => (
                            <Link
                                // className='linkBtn'
                                underline='none'
                                variant="button"

                                sx={{
                                    '&:hover': {
                                        opacity: "0.6",
                                        borderColor: "#3399ff",
                                        color: "primary.dim",
                                    },
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "capitalize",
                                    my: 1, mx: 1.5
                                }}>{tab}
                            </Link>
                        ))}


                        <Button
                            variant='outlined'
                            sx={{

                                '&:hover': {
                                    opacity: "1",
                                    borderColor: "#3399ff",
                                    color: "#3399FF",

                                },
                                color: "#3399FF",
                                borderColor: "#3399ff",
                                opacity: "0.8",
                                my: 1, py: "4px",
                                textTransform: 'capitalize',
                                fontWeight: 'bold',

                            }}>Login
                        </Button>

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );

};

export default NavBar;