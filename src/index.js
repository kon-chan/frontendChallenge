import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './public/Header'
import App from './components/App';

ReactDOM.render(
  <MuiThemeProvider>
    <Header />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
