// Code MovieReviews Here
import React from 'react';

/*<div className="book-list">
    { books.map(book => <Book title={book.title} img_url={book.img_url} />) }*/

const MovieReviews = props => {
    //console.log('props MovieReview', props)
    let reviews = [];
    if (props.reviews && props.reviews.map){
      reviews = props.reviews.map(review => <Review reviewInfo={review}/>)
    }
  return (
          <ul className="review-list">
            {reviews}
          </ul>
  )
}

const Review = reviewInfo => {
  return (
      <li>
        <a href={reviewInfo.reviewInfo.link.url}>{reviewInfo.reviewInfo.display_title}</a>
      </li>
  )
}

export default MovieReviews;
