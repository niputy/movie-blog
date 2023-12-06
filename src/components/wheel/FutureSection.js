import CustomImage from "../CustomImage"

export default function FutureSection(){
    const list = [
        "Create a movie wishlist",
        "Experiment with films",
        "Explore new movie sites",
        "Know fun film facts",
        "Rate movies"
    ]

    return (
        <div className="section future">
            <div className="col">
                <CustomImage src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">In the future you will</h1>
                { list.map((item, index) => (
                    <p className="future-item" key={index}>{item}</p>
                )) }
            </div>
        </div>
    )
}