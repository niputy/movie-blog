import { useEffect, useState } from "react";
import Roulette from "../components/Roulette";
import Loader from "../components/Loader";
import { useFetching } from "../hooks/useFetching";
import fetch from "node-fetch";
import { options, movieListUrl } from "../api/api";
import MovieCard from "../components/MovieCard";

export default function Home(){
    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState([]);
    const [startSpin, setStartSpin] = useState(false);
    const [showMovieCard, setShowMovieCard] = useState(false);

    const [fetchMovies, isLoading, error] = useFetching(async () => {
        const response = await fetch(movieListUrl, options);
        const data = await response.json();
        const shuffledMovies = data.results.sort(() => Math.random() - 0.5)
        setMovieList(shuffledMovies);
        setMovie(shuffledMovies[17]);
        console.log(shuffledMovies[17]);
    })

    useEffect(() => {
        if (!movieList.length) {
            fetchMovies();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div >
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> : <Roulette startSpin={startSpin} startSpinning={startSpinning} movies={movieList}/>}
            {showMovieCard && <MovieCard movie={movie}/>}
        </div>
    )

    function startSpinning() {
        setStartSpin(true);
        setTimeout(() => {
            setShowMovieCard(true);
        }, 5000);
    }
}