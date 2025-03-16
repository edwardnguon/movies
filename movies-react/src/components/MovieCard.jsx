import React from 'react';

const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    // Handle favorite click
  };

  return (
    <div className="min-w-[15em] rounded-lg overflow-hidden bg-gray-900 transition-transform transform min-h-[30em] flex flex-col">
      {/* Image Container */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-h-99 object-cover" // Set a fixed height and use object-cover for consistent sizing
        />
        <div className="absolute top-2 right-2 z-10">
          <button
            className="bg-blue-500 text-white p-2 rounded-full"
            onClick={onFavoriteClick}
          >
            ❤️
          </button>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="flex flex-col p-4 flex-1 gap-2"> {/* Added padding here */}
        <h3 className="text-sm">{movie.title}</h3>
        <p className="text-xs">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

