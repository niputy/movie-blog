import { Link,  } from "react-router-dom";
import CustomImage from "../CustomImage";

export default function HeroSection() {
    const imagesCount = 9;

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Movie Blog is a place where you can find a random movie which you never see before. And our service is absolutely free. So start exploring now!</p>
                <Link to="/wheel" className="btn">Explore Now</Link>
            </div>
            <div className="col gallery">
                {[...Array(imagesCount)].map((_, i) => (
                    <CustomImage key={i} src={`/img/gallery/img_${i + 1}.jpg`} />
                ))}
            </div>
        </div>
    )
}