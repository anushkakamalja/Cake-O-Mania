import Hero from '../sections/homepage/Hero';
import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Reviews from '../sections/homepage/Reviews';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Reviews />
            <Footer />
        </div>
    );
}
