import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './public/Header';
import Top from './components/Top';
import Library from './components/Library';
import BookShow from './components/BookShow';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Header />
      <Route exact path={'/'} component={Top}/>
      <Route path={'/show/:bookId'} component={BookShow}/>
    </BrowserRouter>

  </MuiThemeProvider>,
  document.getElementById('root')
);
