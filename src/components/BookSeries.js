import React from 'react';
import axios from 'axios';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';


//import BookShow from './BookShow';

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
                <GridListTile key={tile.image}>
                  <img src={tile.image} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    actionIcon={
                      <IconButton aria-label={tile.title}>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
      </div>

    );
  }
}

export default BookSeries;
