import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


