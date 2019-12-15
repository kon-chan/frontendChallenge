import React from 'react';
import { Link } from 'react-router-dom';

//Material-UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import BookSeries from './BookSeries';


class Library extends React.Component {
  constructor() {
    super()
    this.state = {
      firstBookId: undefined
    }
    this.setFirstBookId = this.setFirstBookId.bind(this)
  }

  setFirstBookId(id) {
    this.setState({
      firstBookId: id
    })
  }

  link() {
    if (this.setState !== undefined) {
        return (
        <Link to={`/show/${this.state.firstBookId}`} className="btn">はじめから読む</Link>
        )
    }
  }

  render() {
    return (
      <Card className="card container">
        <CardContent className="cardContent" key={this.props.seriesId}>
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
            <Typography color="textSecondary">
              {this.props.publisher}
            </Typography>

            <Typography variant="body2" component="p" style={{paddingLeft: 35, paddingTop: 12, textAlign: 'left'}} >
              <div className="descContainer">
                {this.props.description}
              </div>
            </Typography>

            {this.link()}
          </div>

        </CardContent>

        <hr />
        <BookSeries
          seriesId={this.props.seriesId}
          onBooksFetched={this.setFirstBookId}

          />
      </Card>


    );
  }
}

export default Library;
