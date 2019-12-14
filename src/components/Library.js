import React from 'react';
//import { BrowserRouter, Route, Link } from 'react-router-dom'
//import { withRouter } from 'react-router-dom';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BookSeries from './BookSeries';


class Library extends React.Component {

  render() {
    return (
      <div>
      <Card className="card container">
      <CardActionArea>
        <CardMedia title={this.props.title} >
          <img src={this.props.seriesImage}/>
        </CardMedia>


        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <BookSeries seriesId={this.props.seriesId} />

    </Card>
      </div>

    );
  }
}

export default Library;
//export default withRouter(Library);
