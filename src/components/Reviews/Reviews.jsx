import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/moviesAPI";


export default function Reviews() {

    const { id } = useParams();
    const [movieReview, setMovieReview] = useState(null);

    useEffect(() => {
        fetchMovieReviews(id).then(setMovieReview);
    }, [id]);

    if (movieReview === null) {
        return;
    }

    return (
        <>
            {movieReview.length !== 0 ? (
                <div>
                    <h3>Movie review</h3>
                    <ul>
                        {movieReview.map(({ author, content, id }) => {
                            return (
                                <li>
                                    <h4>Author: {author}</h4>
                                    <p>{content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <h3>No reviews for this movie </h3>
            )}
        </>
    );
};