import { AppBar, IconButton, Toolbar, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
// import newStyles from './styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff"
    }
  }
})

const App = () => {

  // const classes=newStyles();

  return (
    <><ThemeProvider theme={customTheme}>
      <AppBar position="sticky" color='primary' sx={{ height: 60 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Bethesda
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ><Search /></IconButton>
          <Button /*className={classes.loginSignupbtn}*/ variant='outlined' color='secondary'><Typography >LOG IN / SIGN UP</Typography></Button>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{backgroundColor:"#7cff50",height:600}}>
        
        </div>
      </main>
    </ThemeProvider>

    </>
  )
}

export default App;