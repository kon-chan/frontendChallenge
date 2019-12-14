import React from 'react';
import axios from 'axios';


import BookShow from './BookShow';

class BookSeries extends React.Component {
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

    //request.get(`/books/${this.props.seriesId}/`)

    //request.get('/books/D2rzfW7j/')
    request.get(`/series/${this.props.seriesId}/`)
    .then(res => {
      this.setState({
        datas: res.books
      });
    })
  }

  render() {
    return (
      <div>
        {this.state.datas.map((bookItem) => {
          return (
            <div>
              <h3>TITLE : {bookItem.title}</h3>
              <img src={bookItem.image} />
            </div>
          )
        })}

        {this.state.datas.map((bookSerect) => {
          return (
            <BookShow booksId={bookSerect.id}/>
          )
        })}
      </div>
    );
  }
}

export default BookSeries;
