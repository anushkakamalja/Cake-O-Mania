import React from 'react';
import { addtoCart } from '../adapters/cakeApi';

const Cart = ({ cartCake, setCartCakes }) => {
    const handleSubmit = async () => {
        await addtoCart(cartCake);
        setCartCakes([]);
    };
    console.log(cartCake);
    return (
        <div className="w-64 h-auto justify-center rounded-2xl border-4 mb-10 border-gray-200 p-3">
            <p className="font-header text-3xl pl-20">Cart</p>
            <div className="rounded-2xl pt-3">
                {cartCake.map((cake) => (
                    <div key={cake.image_url}>
                        <div className="pb-3">
                            <img src={cake.image_url} alt="alt" className="rounded-2xl" />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-1">
                            <p className="font-body flex flex-row items-center m-1">
                                {' '}
                                ₹{cake.price_per_half_kg}{' '}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="flex flex-row items-center pb-1">
                    <p className="font-header text-xl pl-5">Checkout</p>
                </div>

                <button
                    type="submit"
                    className="font-header text-l border-2 w-full mb-3 border-red-300 hover:bg-red-300 hover:text-white cursor-pointer "
                    onClick={handleSubmit}>
                    Submit
                </button>
                <a href="/cart_page">
                    <button
                        type="submit"
                        className="font-header text-l border-2 w-full border-red-300 hover:bg-red-300 hover:text-white cursor-pointer ">
                        Go to Cart Page
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Cart;
