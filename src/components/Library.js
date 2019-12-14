import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BookSeries from './BookSeries';
import '../index.css';

class Library extends React.Component {

  render() {
    return (
      <div>
      <img src={this.props.seriesImage}/>
      <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>

        <p>{this.props.publisher}</p>
        <p>{this.props.author}</p>

        <BookSeries seriesId={this.props.seriesId}/>
      </div>
    );
  }
}

export default Library;
