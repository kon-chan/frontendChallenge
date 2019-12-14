import React from 'react';
import axios from 'axios';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import IconButton from '@material-ui/core/IconButton';


import BookShow from './BookShow';
//import '../css/BookSeries.css';
const styles = { whiteSpace: 'normal' };


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

/*
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
*/
    return (


      <div className="container">
            <GridList className="gridList" cols={4}>
              {this.state.datas.map(tile => (
                <GridListTile className="gridListTile" style={{ height: 'auto' }} key={tile.image}>
                  <img src={tile.image} alt={tile.title} style={{position: 'static', transform: 'none'}}/>
                  <GridListTileBar
                    title={tile.title}
                    style={{position: 'static', whiteSpace: 'normal'}}
                  >
                  </GridListTileBar>
                </GridListTile>
              ))}
            </GridList>



          {/*<BookShow booksId="D2rzfW7j" />*/}
      </div>

    );
  }
}

export default BookSeries;
