import { Link,  } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/man-watching-movies.json"

export default function HeroSection() {

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Movie Blog is a place where you can find a random movie which you never see before. And our service is absolutely free. So start exploring now!</p>
                <Link to="/wheel" className="btn">Explore Now</Link>
            </div>
            <div className="col">
                <Lottie animationData={animationData}/>
            </div>
        </div>
    )
}