import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';



const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=177cfe17";
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies(searchTerm)
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie1={movie}></MovieCard>
            ))}
          </div>
          ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  )
}

export default App
