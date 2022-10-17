
import { fetchMovieDetails } from '../../services/moviesAPI';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {

    const [movieInfo, setMovieInfo] = useState(null);
    
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        fetchMovieDetails(id).then(setMovieInfo);
    }, [id]);

    if (movieInfo === null) {
        return;
    }

    const { poster_path,
        original_title,
        vote_average,
        overview,
        release_date,
        genres, } = movieInfo;
    
    const genreList = genres.map(item => item.name).join(', ');

    let movieReleaseDate = release_date.split('').slice(0.4).join('');
    if (release_date === '') {
        movieReleaseDate = 'Unknown';
    }
    return (
        <div style={{margin: 21}}>
            <Link to={
                location.pathname.includes('movies')
                    ? `${location.state.from.pathname}${location.state.from.search}`
                    : '/home'
            }>
                Back
            </Link>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`${original_title}`}
                    height={500} />
                <div>
                    <h2>{original_title} {movieReleaseDate}</h2>
                    <p>User score: <span>{Math.round(vote_average * 10)}%</span></p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genreList}</p>
                </div>
            </div>

            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast" state={{ from: location.state?.from ?? '' }}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location.state?.from ?? '' }}>
                        Reviews
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default MoviesDetailsPage;