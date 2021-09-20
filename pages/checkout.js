import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Checkout from '../components/Checkout';
export default function CheckoutPage() {
    return (
        <div>
            <div className="pb-96">
                <Header className="z-20" />
                <Checkout />
            </div>
            <div className="w-full pt-96 mt-96">
                <Footer />
            </div>
        </div>
    );
}
