import Image from 'next/image';
import cakeImage from '../assets/images/shop.png';
import Header from '../sections/homepage/Header';
import Footer from '../sections/homepage/Footer';
import { BsSearch } from 'react-icons/bs';
import CakeItemList from '../components/CakeItemList';
import Cart from '../components/Cart';
import { AiFillCaretDown } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { getAllCakes } from '../adapters/cakeApi';
import WithAuth from '../HOCs/WithAuth';
import { searchByPattern } from '../adapters/cakeApi';

const Shop = () => {
    const [filteredCakes, setFilteredCakes] = useState([]);
    const [isFiltered, setIsFiltered] = useState('rating');
    const [cartCakes, setCartCakes] = useState([]);
    const [isCartCakes, setIsCartCakes] = useState(0);
    const [filterState, setFilterState] = useState('');

    const handleSearch = async (e) => {
        try {
            e.preventDefault();
            const response = await searchByPattern(filterState);
            console.log(response.data);
            setFilteredCakes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCakes();
                setFilteredCakes(response.data);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCartCakes(cartCakes);
    }, [isCartCakes]);

    useEffect(() => {
        filterHandler();
    }, [isFiltered, filteredCakes]);

    const filterHandler = () => {
        switch (isFiltered) {
            case 'low_to_high':
                setFilteredCakes((filteredCakes) =>
                    filteredCakes.sort(GetSortOrder('price_per_half_kg'))
                );
                break;
            case 'high_to_low':
                setFilteredCakes((filteredCakes) =>
                    filteredCakes.sort(GetReverseSortOrder('price_per_half_kg'))
                );
                break;
            case 'ratings':
                setFilteredCakes((filteredCakes) =>
                    filteredCakes.sort(GetReverseSortOrder('rating'))
                );
                break;
            case 'popularity':
                setFilteredCakes((filteredCakes) =>
                    filteredCakes.sort(GetReverseSortOrder('rating'))
                );
                break;
            case 'num_orders':
                setFilteredCakes((filteredCakes) => filteredCakes.sort(GetSortOrder('num_orders')));
                break;
            default:
                setFilteredCakes((filteredCakes) => filteredCakes);
                break;
        }
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
                        <div className=" group relative dropdown py-4 px-2 cursor-pointer font-header flex flex-row r">
                            <button className="hover:text-rose-300 border-solid border-4 border-rose-100 pl-3 ml-2 pr-20 py-1 w-48 rounded-2xl">
                                {' '}
                                Sort by
                            </button>

                            <div className=" border-rose-200 w-42 p-4 text-lg mt-4 bg-white content-right text-center font-body  border-4 rounded-lg group-hover:block dropdown-menu absolute hidden h-auto">
                                <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                    <button onClick={() => setIsFiltered('popularity')}>
                                        Popularity
                                    </button>
                                </div>
                                <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                    <button onClick={() => setIsFiltered('ratings')}>
                                        Ratings
                                    </button>
                                </div>
                                <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                    <button onClick={() => setIsFiltered('low_to_high')}>
                                        Price:low to high
                                    </button>
                                </div>
                                <hr className="bg-blue-300 h-0.5 p-px w-1/3 m-auto" />
                                <div className="p-1.5 hover:text-rose-300 cursor-pointer">
                                    <button onClick={() => setIsFiltered('high_to_low')}>
                                        Price:high to low
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-7 right-5 text-rose-400">
                                <AiFillCaretDown />
                            </div>
                        </div>
                    </div>

                    <div>
                        <form
                            className="pl-5 border-4 border-rose-100 flex flex-row m-3 justify-between rounded-full py-3 "
                            onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={filterState}
                                onChange={(e) => {
                                    setFilterState(e.target.value);
                                }}
                                placeholder="Search Cakes"
                                className="font-medium text-black outline-none font-header"
                            />
                            <button className="px-3 rounded-full text-pink-500 hover:scale-150">
                                <BsSearch onClick={handleSearch} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center ">
                <CakeItemList
                    allCakes={filteredCakes}
                    isCartCakes={isCartCakes}
                    setIsCartCakes={setIsCartCakes}
                    setCartCakes={setCartCakes}
                    cartCakes={cartCakes}
                />
                <div className="pl-20 flex justify-center">
                    <div className="flex flex-col">
                        <Cart cartCake={cartCakes} setCartCakes={setCartCakes} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WithAuth(Shop);
