import axios from "axios";

const KEY = '49aa5ba56464fea19f5960b82707d8fc'
// axios.defaults.baseURL = 'https://api.themoviedb.org/3'


export const fetchTrending = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;

    try {
        const movies = await axios.get(url);
        return movies.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSearch = async query => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
        const movies = await axios.get(url);
        return movies.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieDetails = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;

    try {
        const movies = await axios.get(url);
        return movies.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieCredits = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;

    try {
        const movies = await axios.get(url);
        return movies.data.cast;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieReviews = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;

    try {
        const movies = await axios.get(url);
        return movies.data.results;
    } catch (error) {
        console.log(error);
    }
};
