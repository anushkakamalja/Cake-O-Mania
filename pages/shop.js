import Image from 'next/image';
import cakeImage from '../assets/images/shop.png';
import Header from '../sections/homepage/Header';
import Footer from '../sections/homepage/Footer';
import { BsSearch } from 'react-icons/bs';
import CakeItem from '../components/CakeItem';
import CakeItemList from '../components/CakeItemList';
import Cart from '../components/Cart';
import { AiFillCaretDown } from 'react-icons/ai';
import cakeList from '../assets/data/cakedata';
import React, { useState } from 'react';

const Shop = () => {
    const [addedtoCart, setAddedtoCart] = useState(false);
    const [filteredCakes, setFilteredCakes] = useState([]);

    return (
        <div>
            <Header />
            <div className="pt-24">
                <div>
                    <Image src={cakeImage} alt="Image" height={1500} />
                </div>
            </div>
            <div>
                <div className="flex justify-between pb-10 pl-10 pr-10">
                    <div className="hidden md:flex ">
                        <text className="font-header pl-5">
                            {' '}
                            Showing all {cakeList.length} items
                        </text>
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
            </div>
            <div className="flex md:flex-row flex-col justify-center ">
                <CakeItemList />

                <div className="pl-20 flex justify-center">
                    <div className="flex flex-col">
                        <Cart />
                        <div className="w-64 h-32 justify-center rounded-2xl border-4 mb-10 border-gray-200 relative">
                            <text className="font-header text-3xl absolute top-1/3 left-10">
                                Price Filter
                            </text>
                            <button></button>
                        </div>
                        <div className="w-64 h-32 justify-center rounded-2xl border-4 border-gray-200 relative">
                            <text className="font-header text-3xl absolute top-1/3 left-1/3">
                                Tags
                            </text>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
