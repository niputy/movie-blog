import { useEffect, useState } from "react";
import Roulette from "../components/Roulette";
import Loader from "../components/Loader";
import { useFetching } from "../hooks/useFetching";
import fetch from "node-fetch";
import { options, movieListUrl, movieDetailsUrl } from "../api/api";
import MovieCard from "../components/MovieCard";

export default function Home(){
    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState([]);
    const [startSpin, setStartSpin] = useState(false);
    const [showMovieCard, setShowMovieCard] = useState(false);

    const [fetchMovies, isLoading, error] = useFetching(async () => {
        const movieListRes = await fetch(movieListUrl, options);
        const data = await movieListRes.json();
        const shuffledMovies = data.results.sort(() => Math.random() - 0.5)
        setMovieList(shuffledMovies);
        
        const movieDetailsRes = await fetch(movieDetailsUrl + shuffledMovies[17].id, options);
        setMovie(await movieDetailsRes.json());
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