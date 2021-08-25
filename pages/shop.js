import Image from 'next/image';
import cakeImage from '../assets/images/shop.png';
import Header from '../sections/homepage/Header';
import Footer from '../sections/homepage/Footer';
import { BsSearch } from 'react-icons/bs';
import { BiCheckbox } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import cakeImageGrid from '../assets/images/cake1.jpg';
import cartCake from '../assets/images/cake3.jpg';
import cakeList from '../assets/data/cakedata';
import React from 'react';

const HeaderPart = () => {
    return (
        <div className="flex justify-between pb-10 pl-10 pr-10">
            <div className="hidden md:flex ">
                <text className="font-header pl-5"> Showing all {cakeList.length} items</text>
            </div>
            <div>
                <text className="font-body">
                    {' '}
                    <div className=" group relative dropdown py-4 px-2 cursor-pointer z-20 font-header flex flex-row r">
                        <a className="hover:text-rose-300 border-solid border-4 border-rose-100 pl-3 ml-2 pr-20 py-1 w-48 rounded-2xl">
                            {' '}
                            Sort by
                        </a>

                        <div className=" border-rose-200 w-42 p-4 text-lg mt-4 bg-white content-right text-center font-body  border-4 rounded-lg group-hover:block dropdown-menu absolute hidden h-auto">
                            <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                <a>Popularity</a>
                            </div>
                            <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                            <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                <a>Ratings</a>
                            </div>
                            <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                            <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                <a>Price:low to high</a>
                            </div>
                            <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                            <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                <a>Price:high to low</a>
                            </div>
                        </div>
                        <div className="absolute top-7 right-5 text-rose-400">
                            <AiFillCaretDown />
                        </div>
                    </div>
                </text>
            </div>

            <div>
                <form className="pl-5 border-4 border-rose-100 flex flex-row m-3 justify-between rounded-full py-3 ">
                    <input
                        type="text"
                        placeholder="Search Cakes"
                        className="font-medium text-black font-header"
                    />
                    <button className="px-3 rounded-full text-pink-500 hover:scale-150">
                        <BsSearch />
                    </button>
                </form>
            </div>
        </div>
    );
};

const RightSide = () => {
    return (
        <div className="flex flex-col">
            <Cart />
            <div className="w-64 h-32 justify-center rounded-2xl border-4 mb-10 border-gray-200 relative">
                <text className="font-header text-3xl absolute top-1/3 left-10">Price Filter</text>
                <button></button>
            </div>
            <div className="w-64 h-32 justify-center rounded-2xl border-4 border-gray-200 relative">
                <text className="font-header text-3xl absolute top-1/3 left-1/3">Tags</text>
            </div>
        </div>
    );
};

const CakeItem = ({ src }) => {
    const { id, image, ratings, old_price, new_price, cake_name } = src;
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
            <div className="flex flex-row justify-center  mt-2">
                <button
                    className="font-header text-sm flex justify-center items-center px-2 hover:text-rose-400 border-2 rounded-xl border-gray-150"
                    onClick={Cart}>
                    <text className="px-2">Add to cart </text>
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
};

const Cart = () => {
    return (
        <div className="w-64 h-auto justify-center rounded-2xl border-4 mb-10 border-gray-200 p-3">
            <text className="font-header text-3xl pl-20">Cart</text>
            <div className="rounded-2xl pt-3">
                <div className="pb-3">
                    <Image src={cartCake} className="rounded-2xl" />
                </div>
                <div className="flex flex-row items-center justify-between pb-1">
                    <RiAddLine className="border-2 border-red-300" />
                    <text className="font-body flex flex-row items-center m-1"> Quantity </text>
                    <RiSubtractLine className="border-2 border-red-300" />
                </div>
                <div className="flex flex-row items-center pb-1">
                    <text className="font-header text-xl pl-5">Checkout</text>
                    <text className="font-header text-l pl-5">₹Total</text>
                </div>
                <div className="font-header text-l border-2 w-auto border-red-300 hover:bg-red-300 hover:text-white cursor-pointer pl-20">Submit</div>
            </div>
        </div>
    );
};

const Shop = () => {
    return (
        <div>
            <Header />
            <div className="pt-24">
                <div>
                    <Image src={cakeImage} alt="Image" height={1500} />
                </div>
            </div>
            <div>
                <HeaderPart />
            </div>
            <div className="flex md:flex-row flex-col justify-center ">
                <div className="flex  justify-center">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 pl-8 pb-8 ">
                        {cakeList.map((cakeData, index, position) => (
                            <CakeItem src={cakeData} key={cakeData.id} />
                        ))}
                    </div>
                </div>
                <div className="pl-20 flex justify-center">
                    <RightSide />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
