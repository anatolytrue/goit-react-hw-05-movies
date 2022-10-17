import { useEffect } from "react";
import { useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearch } from "services/moviesAPI";


export default function MovieSearchList({ query }) {
    
    const [movieList, setMovieList] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setSearchParams({ query });
    fetchSearch(query).then(setMovieList);
  }, [query, setSearchParams]);

  const urlQuery = searchParams.get('query');

  useEffect(() => {
    if (urlQuery === null) {
      return;
    }
    fetchSearch(urlQuery).then(setMovieList);
  }, [urlQuery, setSearchParams]);


  return (
    <>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
    
  )
}
