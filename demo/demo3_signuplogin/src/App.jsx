import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";


const customTheme = createTheme({
    palette: {
        primary: {
            main: "#1976D2",
            light: "#ffffff",
        },

    },
});


const App = () => {
    const [promostion, setPromotions] = useState(true);
    const [rememberMe, setRememberMe] = useState(true);



    const promHandler = (event) => {
        setPromotions(event.target.checked);
    };
    const remHandler = (event) => {
        setRememberMe(event.target.checked);
    };

    return (<>

        <ThemeProvider theme={customTheme}>
            <CssBaseline />

            <Routes>
                <Route
                    path="/"
                    element={
                        <SignUpPage
                            checkHandler={promHandler}
                            checked={promostion} />
                    }
                />

                <Route
                    path="/log-in"
                    element={
                        <LogInPage
                            checkHandler={remHandler}
                            checked={rememberMe} />
                    }
                />

            </Routes>


        </ThemeProvider>
    </>
    );
};

export default App;