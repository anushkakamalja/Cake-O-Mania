import React from 'react';
import Image from 'next/image';
import cakeImageGrid from '../assets/images/cake1.jpg';
import { FaStar } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CakeItem = ({ src }) => {
    const { id, image, ratings, old_price, new_price, cake_name } = src;
    let ratingNumber = [];
    for (let i = 0; i < ratings; i++) {
        ratingNumber.push(i);
    }
    return (
        <div className="w-64 justify-center pb-10 rounded-2xl shadow-lg">
            <div className="pb-2">
                <Image src={cakeImageGrid} alt="Image" className="rounded-2xl" />
            </div>
            <div className="pb-2">
                <p className="font-header text-2xl flex justify-center">{cake_name}</p>
            </div>
            <div className="flex flex-row justify-center pb-2">
                {ratingNumber.map((i) => {
                    return <FaStar className="text-yellow-400 " key={i} />;
                })}
            </div>
            <div className="flex flex-row justify-center pb-2">
                <p className="line-through text-gray-400 pr-2">₹{old_price}</p>
                <p>₹{new_price}</p>
            </div>
            <div className="flex flex-row justify-center  mt-2 ">
                <button className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150">
                    <p className="px-2">Add to cart </p>
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
};

const checkRatings = () => {
    return <FaStar className="text-yellow-400 " />;
};

export default CakeItem;