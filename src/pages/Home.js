import HeroSection from "../components/home/HeroSection";
import FutureSection from "../components/home/FutureSection";
import QuoteSection from "../components/home/QuoteSection";

export default function Home(){
    console.log('gg');
    console.log(process.env.AUTHORIZATION_KEY);

    return (
        <div>
            <HeroSection />
            <FutureSection />
            <QuoteSection />
        </div>
    )
}