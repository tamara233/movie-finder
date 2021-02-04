import React from 'react'
import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="movie"
      src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
      width="200px"
      height="250px"
    />
    <h2>{props.movie.title}</h2>
    <p>Filmed in: {props.movie.release_date}</p>
  </div>
)
