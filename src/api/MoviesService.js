import axios from 'axios';

const API_KEY = '4c2a913eb696f7b64935b055077ee1b6';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMivieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}