import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//Material UI
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


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
    return (
      <div className="container">
        <GridList className="gridList" cols={4}>
          {this.state.datas.map(tile => (

            <GridListTile className="gridListTile" style={{ height: 'auto' }} key={tile.image}>

                <Link to={`/show/${tile.id}`} key={tile.id} className="gridListTileLink">
                  <img src={tile.image} alt={tile.title} style={{height: 200, position: 'static', transform: 'none'}}/>

                <GridListTileBar
                  title={tile.title}
                  style={{backgroundColor: '#4DD0E1',position: 'static', whiteSpace: 'normal'}}
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
