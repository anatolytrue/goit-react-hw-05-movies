import MovieSearchList from "components/MovieSearchList/MovieSearchList"
import { useState } from "react"

export default function MoviesPage() {
    const [inputSearch, setInputSearch] = useState('');
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setInputSearch(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        // e.target.reset();
        setQuery(inputSearch);
    };

    return (
        <div style={{margin: 21}}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="qiery" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <MovieSearchList query={query} />
        </div>
    )
}
