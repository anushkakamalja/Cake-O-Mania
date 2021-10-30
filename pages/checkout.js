import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Checkout from '../components/Checkout';
import WithAuth from '../HOCs/WithAuth';
const CheckoutPage = () => {
    return (
        <div>
            <div className="">
                <Header className="z-20" />
                <Checkout />
            </div>
            <div className="w-full mt-12">
                <Footer />
            </div>
        </div>
    );
};
export default WithAuth(CheckoutPage);
