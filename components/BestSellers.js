import React from 'react';
import Image from 'next/image';
import cakedivider from '../assets/images/cakedivider.png';
import { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const BestSellers = ({ bestSellers }) => {
    return (
        <div className="flex  items-center flex-col border-2 pt-4 pb-4 border-dotted text-mybrown-100 relative bg-speciality-bg">
            <div className="pb-8">
                <Image src={cakedivider} alt="logo" width={181} height={41} className="mt-20" />
            </div>
            <p className="font-header md:text-8xl text-5xl  pb-8"> Best Sellers</p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 pl-2 pr-2 pb-8 ">
                {bestSellers.map((cakes) => (
                    <SellerItems src={cakes} key={cakes.name} />
                ))}
            </div>
        </div>
    );
};

const SellerItems = ({ src }) => {
    const { name, image_url, price_per_half_kg, rating, num_orders, type } = src;
    let ratingNumber = [];
    for (let i = 0; i < rating; i++) {
        ratingNumber.push(i);
    }
    return (
        <div className="w-full justify-center pb-10 rounded-2xl shadow-lg border-4 border-pink-100">
            <div className="pb-2">
                <img
                    src={image_url}
                    alt="img"
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto mt-8"></img>
            </div>
            <div className="pb-2">
                <p className="font-header m-2 text-2xl flex justify-center">{name}</p>
            </div>
            <div className="flex flex-row justify-center pb-2">
                {ratingNumber.map((i) => {
                    return <FaStar className="text-yellow-400 " key={i} />;
                })}
            </div>
            <div className="flex flex-row justify-center pb-2 text-xl">
                <p>₹{price_per_half_kg}</p>
            </div>
            <a href="/shop">
                <div className="flex flex-row justify-center  mt-2 ">
                    <button className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150">
                        <p className="px-2">Go to shop </p>
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </a>
        </div>
    );
};

export default BestSellers;
