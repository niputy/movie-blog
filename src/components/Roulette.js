import { useState } from "react";

export default function Roulette({ startSpin, startSpinning, movies }){
    const baseUrl = 'https://image.tmdb.org/t/p/original';

    return (
        <div className="box">
            <div className="wrapper">
            <div className="line" />
                <div className={startSpin ? "window active" : "window"}>
                    <ul className="list">
                    {movies.map(m => (<li key={m.id}><img src={baseUrl + m.poster_path} alt="" /></li>))}
                    </ul>
                </div>
            </div>
            <button className="btn" onClick={startSpinning}>Spin</button>
        </div>
    )
}