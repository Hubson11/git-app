import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      silver: '#BDBDBD',
      white: '#FAFAFA',
      black: '#263238',
      red: '#F44336',
    },
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>
, document.getElementById('root'));
