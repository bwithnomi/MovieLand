import React from 'react'

const MovieCard = ({movie1}) => {
  return (

    <div className="movie">
      <div className="">
        <p>{movie1.Year}</p>
      </div>
      <div className="">
        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt="" />
      </div>
      <div className="">
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard