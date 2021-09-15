import React from 'react';
import Image from 'next/image';
import cakeImageGrid from '../assets/images/cake1.jpg';
import { FaStar } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CakeItem = ({ src, setAddedtoCart }) => {
    const { id, image, ratings, old_price, new_price, cake_name } = src;
    const clickHandler = () => {
        
    };
    return (
        <div className="w-64 justify-center pb-10 rounded-2xl shadow-lg">
            <div className="pb-2">
                <Image src={cakeImageGrid} alt="Image" className="rounded-2xl" />
            </div>
            <div className="pb-2">
                <text className="font-header text-2xl flex justify-center">{cake_name}</text>
            </div>
            <div className="flex flex-row justify-center pb-2">
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
            </div>
            <div className="flex flex-row justify-center pb-2">
                <text className="line-through text-gray-400 pr-2">₹{old_price}</text>
                <text>₹{new_price}</text>
            </div>
            <div className="flex flex-row justify-center  mt-2 ">
                <button className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150">
                    <text className="px-2">Add to cart </text>
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default CakeItem;
