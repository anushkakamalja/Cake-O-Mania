import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartCakes, addedtoCart, setAddedtoCart, setCartCakes }) => {
    return (
        <div className="w-64 h-auto justify-center rounded-2xl border-4 mb-10 border-gray-200 p-3">
            <text className="font-header text-3xl pl-20">Cart</text>
            {cartCakes.map((cake) => (
                <CartItem cake={cake} addedtoCart={addedtoCart} setAddedtoCart={setAddedtoCart} />
            ))}
        </div>
    );
};
export default Cart;
