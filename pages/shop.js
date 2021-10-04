import Image from 'next/image';
import cakeImage from '../assets/images/shop.png';
import Header from '../sections/homepage/Header';
import Footer from '../sections/homepage/Footer';
import { BsSearch } from 'react-icons/bs';
import CakeItemList from '../components/CakeItemList';
import Cart from '../components/Cart';
import { AiFillCaretDown } from 'react-icons/ai';
import cakeList from '../assets/data/cakedata';
import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [filteredCakes, setFilteredCakes] = useState(cakeList);
    const [isFiltered, setIsFiltered] = useState('id');

    useEffect(() => {
        filterHandler();
        setCakes();
    }, [isFiltered, filteredCakes]);

    const filterHandler = () => {
        switch (isFiltered) {
            case 'new_price':
                setFilteredCakes(filteredCakes.sort(GetSortOrder(isFiltered)));
                console.log(filteredCakes);
                break;
            case 'old_price':
                setFilteredCakes(filteredCakes.sort(GetReverseSortOrder('new_price')));
                console.log(filteredCakes);
                break;
            case 'ratings':
                setFilteredCakes(filteredCakes.sort(GetReverseSortOrder(isFiltered)));
                console.log(filteredCakes);
                break;
            case 'id':
                setFilteredCakes(filteredCakes.sort(GetSortOrder(isFiltered)));
                console.log(filteredCakes);
                break;
            default:
                setFilteredCakes(filteredCakes);
                console.log(filteredCakes);
                break;
        }
    };

    const setCakes = () => {
        <CakeItemList allCakes={filteredCakes} />;
    };
    //Comparer Function
    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    }

    function GetReverseSortOrder(prop) {
        return function (a, b) {
            if (a[prop] < b[prop]) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        };
    }

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
                        <p className="font-header pl-5">
                            {' '}
                            Showing all {filteredCakes.length} items
                        </p>
                    </div>
                    <div>
                        <p className="font-body">
                            {' '}
                            <div className=" group relative dropdown py-4 px-2 cursor-pointer z-20 font-header flex flex-row r">
                                <a className="hover:text-rose-300 border-solid border-4 border-rose-100 pl-3 ml-2 pr-20 py-1 w-48 rounded-2xl">
                                    {' '}
                                    Sort by
                                </a>

                                <div className=" border-rose-200 w-42 p-4 text-lg mt-4 bg-white content-right text-center font-body  border-4 rounded-lg group-hover:block dropdown-menu absolute hidden h-auto">
                                    <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                        <a onClick={() => setIsFiltered('id')}>Popularity</a>
                                    </div>
                                    <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                    <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                        <a onClick={() => setIsFiltered('ratings')}>Ratings</a>
                                    </div>
                                    <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                    <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                        <a onClick={() => setIsFiltered('new_price')}>
                                            Price:low to high
                                        </a>
                                    </div>
                                    <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                    <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                        <a onClick={() => setIsFiltered('old_price')}>
                                            Price:high to low
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute top-7 right-5 text-rose-400">
                                    <AiFillCaretDown />
                                </div>
                            </div>
                        </p>
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
                <CakeItemList allCakes={filteredCakes} />;
                <div className="pl-20 flex justify-center">
                    <div className="flex flex-col">
                        <Cart />
                        <div className="w-64 h-32 justify-center rounded-2xl border-4 mb-10 border-gray-200 relative">
                            <p className="font-header text-3xl absolute top-1/3 left-10">
                                Price Filter
                            </p>
                            <button></button>
                        </div>
                        <div className="w-64 h-32 justify-center rounded-2xl border-4 border-gray-200 relative">
                            <p className="font-header text-3xl absolute top-1/3 left-1/3">
                                Tags
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
