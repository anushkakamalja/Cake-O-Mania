import React from 'react';
import { addtoCart } from '../adapters/cakeApi';

const Cart = ({ cartCake, setCartCakes }) => {
    const handleSubmit = async () => {
        await addtoCart(cartCake);
        setCartCakes([]);
    };
    return (
        <div className="max-w-xs h-auto justify-center rounded-2xl border-4 mb-10 border-gray-200 p-3">
            <p className="font-header text-3xl pl-20">Cart</p>
            <div className="rounded-2xl pt-3 divide-y-2">
                {cartCake.map((cake) => (
                    <div key={cake.image_url} className="p-4">
                        <div className="pb-3">
                            <img src={cake.image_url} alt="alt" className="rounded-2xl" />
                        </div>
                        <div className="pb-1 w-full">
                            <p className="font-body text-center w-full text-2xl mt-2">
                                {' '}
                                ₹{cake.price_per_half_kg}{' '}
                            </p>
                        </div>
                    </div>
                ))}
                <div>
                    <div className="py-3">
                        <p className="font-header text-center text-xl pl-5">Checkout</p>
                    </div>

                    <button
                        type="submit"
                        className="font-header text-l rounded-full border-2 py-2 w-full mb-3 border-rose-400 hover:bg-rose-400 hover:text-white cursor-pointer "
                        onClick={handleSubmit}>
                        Submit
                    </button>
                    <a href="/cart_page">
                        <button
                            type="submit"
                            className="font-header text-l rounded-full border-2 w-full py-2 border-rose-400 hover:bg-rose-400 hover:text-white cursor-pointer ">
                            Go to Cart Page
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cart;
