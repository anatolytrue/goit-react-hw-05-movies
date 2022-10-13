import axios from 'axios';

const KEY = '49aa5ba56464fea19f5960b82707d8fc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMoviesQuery(query) {
    const { data } = await axios.get(`/search/movie?api_key=${KEY}&query=${query}&language=uk&page=1&include_adult=false`);
    const moviesInfo = data.results.map(({ id, original_title, poster_path }) => ({ id, original_title, poster_path }));
    return moviesInfo
}