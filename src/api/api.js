export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + process.env.REACT_APP_AUTHORIZATION_KEY
                }
            };
export const movieListUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
export const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/';

