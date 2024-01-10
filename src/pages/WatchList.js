import { useContext } from "react";
import WatchCard from "../components/WatchCard";
import SearchBar from "../components/search/SearchBar";
import { GlobalContext } from "../context/GlobalState";

export default function WatchList(){
    const { watchList } = useContext(GlobalContext);

    return (
        <>
            <SearchBar />
            <div className="movie-grid">
                {watchList.map((movie, i) => (
                    <WatchCard key={i} movie={movie}/>
                ))}
            </div>
        </>
    )
}