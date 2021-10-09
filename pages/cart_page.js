import Footer from '../sections/homepage/Footer';
import Header from '../sections/homepage/Header';
import Cart from '../sections/cart';
import WithAuth from '../HOCs/WithAuth';
function CartPage() {
    return (
        <div>
            <Header className="z-20" />
            <Cart />
            <Footer />
        </div>
    );
}

export default WithAuth(CartPage);
