import React from 'react';
import axios from 'axios';

//Material UI
//import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


class BookShow extends React.Component {
  constructor(){
    super();
    this.state = {
      datas:[]
    };
    console.log("hello")
  }

  componentWillMount(){
    const request = axios.create({
      baseURL: 'https://wfc2-image-api-259809.appspot.com/api'
    })


    console.log(this.props.booksId)
    request.get(`/books/${this.props.booksId}/`)
    .then(res => {
      this.setState({
        datas: res.data.imageData
      });
    })
  }

  /*returnのやつ
  <div>
    {this.state.datas.map((bookImage) => {
      return (
          <div>
            <img src={bookImage.imageUrl} />
          </div>
      )
    })}

  </div>
  */

  render() {
    return (
      <React.Fragment>
        <Container fixed>
          {this.state.datas.map((bookImage) => {
            return (
                <div>
                  <img src={bookImage.imageUrl} />
                </div>
            )
          })}
        </Container>
      </React.Fragment>
    )
  }
}

export default BookShow;
