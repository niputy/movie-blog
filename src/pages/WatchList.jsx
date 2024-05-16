import WatchCard from "../components/WatchCard";
import SearchBar from "../components/search/SearchBar";
import { useSelector } from "react-redux";

export default function WatchList(){
    const watchList = useSelector((state) => state.watchList.watchList)

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