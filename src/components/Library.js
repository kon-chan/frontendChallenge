import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import BookSeries from './BookSeries';
//mport '../index.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class Library extends React.Component {

  render() {
    return (



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
    </Card>
    );
  }
}

export default Library;
