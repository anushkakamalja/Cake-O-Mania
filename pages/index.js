import Hero from '../sections/homepage/Hero';
import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Reviews from '../sections/homepage/Reviews';
import Specialities from '../sections/homepage/Specialities';
import Top from '../sections/homepage/Top';
import Video from '../sections/homepage/YoutubeVideo';
import BestSellers from '../components/BestSellers';
import HappyHours from '../components/HappyHours';
import { useEffect, useState } from 'react';
import { getBestSellers } from '../adapters/cakeApi';

export default function Home() {
    
    const [bestSellers, setBestSellers] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBestSellers();
                setBestSellers(response.data)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <Header />
            <Hero />
            <Specialities />
            <BestSellers bestSellers = {bestSellers}/>
            <HappyHours/>
            <Reviews />
            <Video />
            <Footer />
            <Top />
        </div>
    );
}
