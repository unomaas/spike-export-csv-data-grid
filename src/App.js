import React from 'react';
import Garden from './components/Garden/Garden';
import './App.css';

import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#388e3c'
    },
    secondary: {
      main: '#6d4c41'
    },
  },
});



function App (){
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header" color="primary.main">
          <h1>Welcome to your garden!</h1>
        </header>
        <Garden />
      </div>
    </ThemeProvider>
  )
}

export default App;
