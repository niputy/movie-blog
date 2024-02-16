import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { imageUrl } from "../api/api";

export default function WatchCard({ movie }){

    const { removeMovie } = useContext(GlobalContext);

    return (
        <div className="movie-card">
            <div className="overlay"></div>
      
            <img src={imageUrl + movie.poster_path} alt="" />
      
            <div className="inner-card-controls">
                <button className="btn ctrl-btn" onClick={() => removeMovie(movie)} >
                    <FontAwesomeIcon size='2xl' icon={faX} />
                </button>
            </div>
        </div>
    )
}