import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesApi } from 'services/moviesApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
