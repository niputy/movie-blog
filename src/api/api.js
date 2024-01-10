export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + process.env.REACT_APP_AUTHORIZATION_KEY
                }
            };
const baseUrl = 'https://api.themoviedb.org/3/';
export const movieListUrl = baseUrl + 'trending/movie/day?language=en-US';
export const movieDetailsUrl = baseUrl + 'movie/';
export const movieSearchUrl = (q) => baseUrl + `search/movie?query=${q}&include_adult=true&language=en-US&page=1`;

