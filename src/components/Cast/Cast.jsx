import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from "services/moviesAPI";
import css from './Cast.module.css'

export default function Cast() {
    const { id } = useParams();
    const [movieCredits, setMovieCredits] = useState(null);

    useEffect(() => {
        fetchMovieCredits(id).then(setMovieCredits);
    }, [id]);

    if (movieCredits === null) {
        return;
    }
    const shortMovieCredits = movieCredits.slice(0, 5);
    return (
        <ul className={css.creditsList}>
            {shortMovieCredits.map(({ character, name, profile_path }) => {
                return (
                    <li key={name}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                            alt={`${name}`}
                            height={200}
                        />
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                );
            })}
        </ul>
    )

}