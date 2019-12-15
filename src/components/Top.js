import React from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Library from './Library';
import BookShow from './BookShow'
import '../index.css';

class Top extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'https://wfc2-image-api-259809.appspot.com/api'
    })
    request.get('/series/')
    .then(res => {
      this.setState({
        datas: res.data.data
      });
    })
  }

  render() {

    return (
      <div>
        {/*<BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Library}/>
              <Route path={'/show/:bookId'} component={BookShow}/>
            </Switch>
          </div>
        </BrowserRouter>*/}

        {this.state.datas.map((bookItem) => {
          return (
            <Library
            seriesId={bookItem.seriesId}
            title={bookItem.title}
            author={bookItem.author}
            publisher={bookItem.publisher}
            description={bookItem.description}
            seriesImage={bookItem.seriesImage}
            />
          )
        })}

      </div>
    );
  }
}

export default Top;
