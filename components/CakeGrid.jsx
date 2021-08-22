import React from 'react';
import cakeList from '../assets/data/cakedata.js';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import cakeImage from '../assets/images/cake1.jpg';

const CakeItem = () => {
    return (
        <div className="max-w-sm justify-center pb-10 rounded-2xl shadow-lg">
            <div className="pb-2">
                <Image src={cakeImage} alt="Image" className="rounded-2xl" />
            </div>
            <div className="pb-2">
                <text className="font-header text-2xl flex justify-center">Name</text>
            </div>
            <div className="flex flex-row justify-center pb-2">
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400 " />
            </div>
            <div className="flex flex-row justify-center pb-2">
                <text className="line-through text-gray-400 pr-2">Old price</text>
                <text>New price</text>
            </div>
        </div>
    );
};

const CakeGrid = () => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 pl-8 pb-8 ">
            <CakeItem />
            <CakeItem />
            <CakeItem />
            <CakeItem />
            <CakeItem />
            <CakeItem />
            <CakeItem />
            <CakeItem />
        </div>
    );
};

export default CakeGrid;
