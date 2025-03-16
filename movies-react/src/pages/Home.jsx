import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import axios from 'axios';

import MovieCard from '../components/MovieCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchPopularMovies = () => {
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movie data: ", error)); 
  }

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchPopularMovies();
      return;
    }

    axios.get(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
    .then((response) => setMovies(response.data.results))
    .catch((error) => console.error("Error fetching movie data: ", error));
  }, [searchQuery]);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search for movies..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      {/*<button type="submit" className="search-button">Search</button>*/}
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

    </div>
  );
}

export default Home;
