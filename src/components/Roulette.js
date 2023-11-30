import { useState } from "react";
import { imageUrl } from "../api/api";

export default function Roulette({ startSpin, startSpinning, movies }){

    return (
        <div className="box">
            <div className="wrapper">
            <div className="line" />
                <div className={startSpin ? "window active" : "window"}>
                    <ul className="list">
                    {movies.map(m => (<li key={m.id}><img src={imageUrl + m.poster_path} alt="" /></li>))}
                    </ul>
                </div>
            </div>
            <button className="btn" onClick={startSpinning}>Spin</button>
        </div>
    )
}