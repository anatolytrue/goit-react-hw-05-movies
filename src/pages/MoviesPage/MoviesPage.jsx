import MoviesList from "components/MoviesList/MoviesList";
import { fetchMoviesQuery } from "movieAPI";

const MoviesPage = () => {
    const movies = fetchMoviesQuery();
    return <div>
        <MoviesList movies={ movies} />
    </div>
};

export default MoviesPage;