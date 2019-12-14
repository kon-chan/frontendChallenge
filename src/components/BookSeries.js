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

    //各巻の取得
    request.get(`/series/${this.props.seriesId}/`)
    .then(res => {
      this.setState({
        datas: res.data.books
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

              <BookShow booksId={bookItem.id} />
            </div>
          )
        })}

      </div>
    );
  }
}

export default BookSeries;
