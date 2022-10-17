import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "../../services/moviesAPI";


export default function MoviesList() {

  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    fetchTrending().then(setMovieList);
  }, []);

  return (
    <>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
    
  );
}
