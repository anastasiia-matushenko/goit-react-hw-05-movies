import axios from 'axios';

// const PER_PAGE = 12;
const KEY = '2d78054fcf6f3e1a65f7c4de73b97934';
// const DEFAULT_MAX_PAGE = 41;

const baseRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    // per_page: PER_PAGE,
  },
});

// https://api.themoviedb.org/3/trending/movie/day?api_key=2d78054fcf6f3e1a65f7c4de73b97934

export class MoviesApi {
  static maxPage = null;

  static async fetchTrendingMovies() {
    const END_POINT_TRENDING = '/trending/movie/day';

    const {
      data: { results },
    } = await baseRequest.get(END_POINT_TRENDING);
    console.log('results', results);
    return results;
  }

  static async fetchMovies(query) {
    const END_POINT_SEARCH = '/search/movie';
    if (!query) {
      return;
    }
    const config = {
      params: {
        // page: page,
        query: query,
      },
    };

    const { data } = await baseRequest.get(END_POINT_SEARCH, config);
    const response = data.results;

    return response;
  }

  static async fetchMovieById(movieId) {
    const endPointById = `/movie/${movieId}`;

    const { data } = await baseRequest.get(endPointById);
    // const response = data.results;

    return data;
  }

  // /search/movie
  // static async fetchImages(page, query) {
  //   if (!query) {
  //     return;
  //   }
  //   const config = {
  //     params: {
  //       page: page,
  //       q: query,
  //     },
  //   };

  //   const { data } = await baseRequest.get('', config);
  //   const response = data.hits;

  //   const totalResults = data.totalHits;
  //   const maxHitsPages = Math.ceil(totalResults / PER_PAGE);
  //   FetchApi.maxPage =
  //     maxHitsPages < DEFAULT_MAX_PAGE ? maxHitsPages : DEFAULT_MAX_PAGE;

  //   if (!response.length) {
  //     throw new Error('Oops, no hits found!');
  //   }

  //   return response;
  // }
}
