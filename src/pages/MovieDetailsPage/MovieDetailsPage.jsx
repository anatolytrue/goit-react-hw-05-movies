import {useParams} from 'react-router-dom'
import { fetchMovieDetails } from 'movieAPI';

const MoviesDetailsPage = () => {
    const { id } = useParams();
    const movie = fetchMovieDetails(id)
    return <div>
        <h2>Now showing product - {movie.name} with id - {id}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Neque, esse hic quas quam unde quaerat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
};

export default MoviesDetailsPage;