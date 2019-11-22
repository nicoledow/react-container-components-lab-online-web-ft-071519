import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;
const allURL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
           + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    fetchReviews = apiURL => {
        fetch(apiURL)
        .then(response => response.json())
        .then(object => this.setState({reviews: object.results}))
    }


    componentDidMount() {
        this.fetchReviews(allURL);
    }

    render() {
        return(
            <div className="latest-movie-reviews">
              <SearchableMovieReviewsContainer renderSearchedReviews={this.render} reviews={this.state.reviews} fetchReviews={this.fetchReviews} />
              <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
