import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CakeItem = ({ src, isCartCakes, setIsCartCakes, setCartCakes, cartCakes }) => {
    const cake = src
    const { name, image_url, price_per_half_kg, rating, num_orders, type } = src;

    const addtoCart = (price) => {
        console.log(price);
        setIsCartCakes(isCartCakes => isCartCakes + 1);
        setCartCakes(cake)
        console.log(cartCakes)

    }


    let ratingNumber = [];
    for (let i = 0; i < rating; i++) {
        ratingNumber.push(i);
    }
    return (
        <div className="w-64 justify-center pb-10 rounded-2xl shadow-lg">

            <div className="pb-2">
                <img
                    src={image_url}
                    alt="img"
                    className="rounded-2xl"></img>
            </div>
            <div className="pb-2">
                <p className="font-header text-2xl flex justify-center">{name}</p>
            </div>
            <div className="flex flex-row justify-center pb-2">
                {ratingNumber.map((i) => {
                    return <FaStar className="text-yellow-400 " key={i} />;
                })}
            </div>
            <div className="flex flex-row justify-center pb-2">
                <p>₹{price_per_half_kg}</p>
            </div>
            <div className="flex flex-row justify-center  mt-2 ">
                <button className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150" onClick={() => addtoCart(price_per_half_kg)}>
                    <p className="px-2">Add to cart </p>
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
};


export default CakeItem;