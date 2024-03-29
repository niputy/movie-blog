import { imageUrl } from "../api/api";

export default function MovieCard({ movie }){
    const rate = Math.round(movie.vote_average);

    return (
        <div className="section">
            <div className="col box img">
                <img src={imageUrl + movie.poster_path} alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">{movie.title}</h1>
                <div className="row">
                    <p className="info">{movie.release_date.slice(0, 4)}</p>
                    <p className="info">{`${movie.runtime} min`}</p>
                    <p className="info">{movie.genres[0].name ?? null}</p>
                </div>
                <div className="row">
                    {rate > 0 && [...Array(10)].map((_, i) => ( 
                            <span key={i} className={i+1 <= rate ? "star" : null}>&#9733;</span>        
                        )
                    )}
                </div>
                <p className="info">{movie.overview}</p>
            </div>
        </div>
    )
}