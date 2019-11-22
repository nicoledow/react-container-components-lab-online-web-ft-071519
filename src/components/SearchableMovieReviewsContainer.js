import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(response => response.json())
        //.then(object => console.log('response to search fetch', object))
        .then(object => this.setState({ reviews: object.results}))
        .catch(error => console.log(error))
    }

    render() {
        //debugger;
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={e => this.handleSubmit(e)}>
                     <input type="text" value={this.state.searchTerm} onChange={e => this.handleChange(e)} />
                     <input type="submit" />
                 </form>
                 <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}