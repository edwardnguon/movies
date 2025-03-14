import React, {useState} from 'react';
import '../styles/Home.css';

import MovieCard from '../components/MovieCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const movies = [
    {id: 1, title: "Movie1", release_date: 2020},
    {id: 2, title: "Movie2", release_date: 2021},
    {id: 3, title: "Movie3", release_date: 2022},
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

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
        <button type="submit" className="search-button">Search</button>
      </form>
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
    </div>
  );
}

export default Home;
