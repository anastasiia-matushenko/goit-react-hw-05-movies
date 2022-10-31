import axios from 'axios';

const KEY = '2d78054fcf6f3e1a65f7c4de73b97934';

const baseRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
  },
});

export class MoviesApi {
  static async fetchTrendingMovies() {
    const END_POINT_TRENDING = '/trending/movie/day';

    const {
      data: { results },
    } = await baseRequest.get(END_POINT_TRENDING);
    return results;
  }

  static async fetchMovies(query) {
    const END_POINT_SEARCH = '/search/movie';
    if (!query) {
      return;
    }
    const config = {
      params: {
        query: query,
      },
    };

    const { data } = await baseRequest.get(END_POINT_SEARCH, config);

    return data.results;
  }

  static async fetchMovieById(movieId) {
    const endPointById = `/movie/${movieId}`;

    const { data } = await baseRequest.get(endPointById);

    return data;
  }

  static async fetchMovieCast(movieId) {
    const endPointCast = `/movie/${movieId}/credits`;

    const {
      data: { cast },
    } = await baseRequest.get(endPointCast);

    return cast;
  }

  static async fetchMovieReviews(movieId) {
    const endPointReviews = `/movie/${movieId}/reviews`;

    const { data } = await baseRequest.get(endPointReviews);

    return data.results;
  }
}
