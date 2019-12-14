import React from 'react';
import axios from 'axios';


class BookShow extends React.Component {
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
    request.get(`/books/${this.props.id}/`)
    .then(res => {
      this.setState({
        datas: res.data.imageData
      });
    })
  }

  render() {
    return (
      <div>
        {this.state.datas.map((bookImage) => {
          return (
              <div>
                <img src={bookImage.imageUrl} />
              </div>
          )
        })}

      </div>
    )
  }
}

export default BookShow;
