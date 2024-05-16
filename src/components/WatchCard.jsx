import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { imageUrl } from "../api/api";
import { useDispatch } from "react-redux";
import { removeMovie } from "../context/WatchListReducer";

export default function WatchCard({ movie }){
    const dispatch = useDispatch();

    return (
        <div className="movie-card">
            <div className="overlay"></div>
      
            <img src={imageUrl + movie.poster_path} alt="" />
      
            <div className="inner-card-controls">
                <button className="btn ctrl-btn" onClick={() => dispatch(removeMovie(movie.id))} >
                    <FontAwesomeIcon size='2xl' icon={faX} />
                </button>
            </div>
        </div>
    )
}