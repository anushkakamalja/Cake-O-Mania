import React from 'react';
import Image from 'next/image';
import cakeArray from '../assets/data/bestsellersList';
import cakedivider from '../assets/images/cakedivider.png';
import { BsAwardFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const BestSellers = () => {
    return (
        <div className="flex items-center flex-col border-2 pt-4 pb-4 border-dotted text-mybrown-100 relative bg-speciality-bg">
            <p className="font-header md:text-9xl text-5xl  pb-8"> Best Sellers</p>
            <div className="pb-8">
                <Image src={cakedivider} />
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 pl-2 pr-2 pb-8 ">
                {cakeArray.map((cakes) => (
                    <SellerItems
                        description={cakes.description}
                        name={cakes.cakeName}
                        img={cakes.img}
                        rank={cakes.rank}
                        key={cakes.rank}
                    />
                ))}
            </div>
        </div>
    );
};

const SellerItems = ({ description, name, img, rank }) => {
    return (
        <div className=" relative flex flex-row h-auto shadow-2xl rounded-2xl ">
            <div className="w-full justify-center pb-10 rounded-2xl shadow-lg">
                <div className="pb-2">
                    <Image src={img} alt="Image" className="rounded-2xl" />
                </div>
                <div className="pb-2">
                    <text className="font-header text-2xl flex justify-center">{name}</text>
                </div>
                <div className="flex flex-row justify-center pb-2">
                    <FaStar className="text-yellow-400 " />
                    <FaStar className="text-yellow-400 " />
                    <FaStar className="text-yellow-400 " />
                    <FaStar className="text-yellow-400 " />
                    <FaStar className="text-yellow-400 " />
                </div>
                <div className="flex flex-row justify-center pb-2">
                    <text className=" text-black pr-2">{description}</text>
                </div>
                <div className="flex flex-row justify-center  mt-2 ">
                    <button className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150">
                        <text className="px-2">Click to buy</text>
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 bg-black bg-opacity-40 rounded-full p-2">
                {checkRank({ rank })}
            </div>
        </div>
    );
};

const checkRank = ({ rank }) => {
    if (rank == 1) {
        return <BsAwardFill className="text-yellow-400 " size={50} />;
    } else if (rank === 2) {
        return <BsAwardFill className="text-gray-300" size={50} />;
    } else return <BsAwardFill className="text-mybrown-200" size={50} />;
};

export default BestSellers;
