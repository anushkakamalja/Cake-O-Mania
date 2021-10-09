import React from 'react';
import { addtoCart } from '../adapters/cakeApi';

const Cart = ({ cartCake }) => {

    // const handleSubmit = async()=>{
    //     const response = await addtoCart(cartCake)
    // }


    return (
        <div className="w-64 h-auto justify-center rounded-2xl border-4 mb-10 border-gray-200 p-3">
            <p className="font-header text-3xl pl-20">Cart</p>
            <div className="rounded-2xl pt-3">
                <div className="pb-3">
                    <img src={cartCake.image_url} className="rounded-2xl" />
                </div>
                <div className="flex flex-row items-center justify-between pb-1">
                    <p className="font-body flex flex-row items-center m-1"> ₹{cartCake.price_per_half_kg} </p>       
                </div>
                <div className="flex flex-row items-center pb-1" >
                    <p className="font-header text-xl pl-5">Checkout</p>
                </div>
                <a href="/cart_page">
                    <div className="font-header text-l border-2 w-auto border-red-300 hover:bg-red-300 hover:text-white cursor-pointer pl-20" onClick = {handleSubmit} >
                        Submit
                    </div>
                </a>
            </div>
        </div>
    );
};


export default Cart;