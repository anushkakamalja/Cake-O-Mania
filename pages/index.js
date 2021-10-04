import Hero from '../sections/homepage/Hero';
import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Reviews from '../sections/homepage/Reviews';
import Specialities from '../sections/homepage/Specialities';
import Top from '../sections/homepage/Top';
import Video from '../sections/homepage/YoutubeVideo';
import BestSellers from '../components/BestSellers';
import HappyHours from '../components/HappyHours';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Specialities />
            <BestSellers />
            <HappyHours/>
            <Reviews />
            <Video />
            <Footer />
            <Top />
        </div>
    );
}
