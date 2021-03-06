import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//Material UI
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


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
      this.props.onBooksFetched(res.data.books[0].id)
    })
  }



  render() {
    return (
      <div className="container">
        <GridList className="gridList" cols={4}>
          {this.state.datas.map(tile => (

            <GridListTile className="gridListTile" style={{ height: 'auto' }} key={tile.image}>

                <Link to={`/show/${tile.id}`} key={tile.id} className="gridListTileLink">
                  <img src={tile.image} alt={tile.title} style={{height: 200, paddingTop: 10, position: 'static', transform: 'none'}}/>

                <GridListTileBar
                  title={tile.title}
                  style={{padding: 'noen', backgroundColor: '#009688',position: 'static', whiteSpace: 'normal'}}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>


        </div>

      );
    }
  }

  export default BookSeries;
