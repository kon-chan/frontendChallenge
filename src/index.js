import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//myComponents
import Header from './public/Header';
import Top from './components/Top';
import BookShow from './components/BookShow';

import './index.css';


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
