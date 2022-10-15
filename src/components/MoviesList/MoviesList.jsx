import { Link } from "react-router-dom";

const MoviesList = ({movies}) => {
    return (
       <div>
        {movies.map((movie)=>(
            <div key={movie.id}>
                <Link to={`${movie.id}`}>
                    <img src={`${movie.poster}`} alt="movie-poster" />
                    <h2>{ movie.name}</h2>
                </Link>
            </div>
        ))}
        MoviesList
    </div> 
    )
    
};

export default MoviesList;