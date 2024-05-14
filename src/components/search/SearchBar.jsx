import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { movieSearchUrl, options } from "../../api/api";
import fetch from "node-fetch";
import SearchResults from "./SearchResults";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const { watchList, movieActions } = useContext(GlobalContext);

    return (
        <div className="search-bar-container">
            <div className={`input-wrapper ${results.length && 'active'}`}>
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input
                    placeholder="Type a movie"
                    value={query}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            {results.length > 0 && <SearchResults results={results} addResult={addResult} />}
        </div>
    );

    async function fetchMovies(q) {
        const movieListRes = await fetch(movieSearchUrl(q), options);
        const { results } = await movieListRes.json();
        const filteredRes = results.sort((a, b) => b.vote_average - a.vote_average).slice(0, 7);
        setResults(filteredRes);
    }

    function handleChange(value) {
        setQuery(value);
        if (value) {
            fetchMovies(value);
        } else {
            setResults([]);
        }
    }

    function addResult(movie) {
        if (!watchList.some((m) => m.id === movie.id)) {
            movieActions.addMovie(movie);
        }
        setQuery("");
        setResults([]);
    }
};