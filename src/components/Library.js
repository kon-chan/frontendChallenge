import React from 'react';
import { withRouter } from 'react-router';

//Material-UI
/*
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
*/

//Material-UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BookSeries from './BookSeries';


class Library extends React.Component {

  handleToReadPage = () => {
    this.props.history.push('/read')
  }

  render() {
    return (
        <Card className="card container">
          <CardContent className="cardContent" >
            <div className="routeBook">
              <img src={this.props.seriesImage} alt={this.props.title} className="routeBook" />
            </div>

            <div className="routeBookDesc">
              <Typography variant="h5" component="h2" >
                {this.props.title}
              </Typography>
              <Typography color="textSecondary">
                {this.props.author}
              </Typography>
              <Typography variant="body2" component="p" style={{paddingLeft: 35, paddingTop: 12, textAlign: 'left'}} >
                {this.props.description}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={this.handleToReadPage} size="small" style={{margin: 'auto', color: '#4DD0E1'}}>はじめから読む</Button>
          </CardActions>

          <BookSeries seriesId={this.props.seriesId} />
        </Card>


    );
  }
}
/*
<div>
<Card className="card container">
<CardActionArea>
  <CardMedia title={this.props.title} >
    <img src={this.props.seriesImage} className="routeBook" />
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
*/

export default withRouter(Library);
//export default withRouter(Library);
