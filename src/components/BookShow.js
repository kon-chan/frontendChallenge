import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';


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

    request.get(`/books/${this.props.match.params.bookId}/`)
    .then(res => {
      this.setState({
        datas: res.data.imageData
      });
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.datas.map((bookImage) => {
          return (
              <div className="readContainer">
                <img src={bookImage.imageUrl} key={bookImage.imageId} className="frame"/>
              </div>
          )
        })}
        {/*<Link to='/' className="btn" >Libraryへ戻る</Link>*/}
      </div>
    )
  }
}

export default BookShow;
