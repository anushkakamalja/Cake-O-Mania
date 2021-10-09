import Image from 'next/image';
import bg from '../public/images/bg3.png';
import cake_img from '../public/images/cake.jpg';
import cake_img2 from '../public/images/cake2.jpg';
import cake_img3 from '../public/images/cake3.jpg';
import { ImCross } from 'react-icons/im';

const Cart = () => {
    return (
        <div className="pt-32 z-0 ">
            <div>
                <Image
                    className="transform rotate-180 w-full"
                    src={bg}
                    alt="bg"
                    width={1650}
                    height={500}
                />
            </div>
            <div className="absolute w-4/5  left-40  font-header text-center  text-7xl h-40 z-40 -mt-52">
                <h1 className="text-white ">Cart</h1>
                <p></p>
            </div>
            <div className="-mt-20 top-0 z-10 ">
                <svg
                    className="transform rotate-180"
                    viewBox="0 0 1536 95"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 0 48 C 23 48 23 70 46 70 L 46 70 L 46 0 L 0 0 Z"
                        strokeWidth="0"></path>{' '}
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 45 70 C 69 70 69 50 93 50 L 93 50 L 93 0 L 45 0 Z"
                        strokeWidth="0"></path>{' '}
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 92 50 C 117.5 50 117.5 75 143 75 L 143 75 L 143 0 L 92 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 142 75 C 169 75 169 50 196 50 L 196 50 L 196 0 L 142 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 195 50 C 218.5 50 218.5 74 242 74 L 242 74 L 242 0 L 195 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 241 74 C 269.5 74 269.5 51 298 51 L 298 51 L 298 0 L 241 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 297 51 C 321.5 51 321.5 73 346 73 L 346 73 L 346 0 L 297 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 345 73 C 373.5 73 373.5 50 402 50 L 402 50 L 402 0 L 345 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 401 50 C 424 50 424 76 447 76 L 447 76 L 447 0 L 401 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 446 76 C 472.5 76 472.5 50 499 50 L 499 50 L 499 0 L 446 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 498 50 C 523.5 50 523.5 75 549 75 L 549 75 L 549 0 L 498 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 548 75 C 574.5 75 574.5 49 601 49 L 601 49 L 601 0 L 548 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 600 49 C 623.5 49 623.5 71 647 71 L 647 71 L 647 0 L 600 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 646 71 C 675.5 71 675.5 52 705 52 L 705 52 L 705 0 L 646 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 704 52 C 726 52 726 75 748 75 L 748 75 L 748 0 L 704 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 747 75 C 772 75 772 52 797 52 L 797 52 L 797 0 L 747 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 796 52 C 823 52 823 75 850 75 L 850 75 L 850 0 L 796 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 849 75 C 873.5 75 873.5 52 898 52 L 898 52 L 898 0 L 849 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 897 52 C 922 52 922 75 947 75 L 947 75 L 947 0 L 897 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 946 75 C 972 75 972 52 998 52 L 998 52 L 998 0 L 946 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 997 52 C 1024 52 1024 74 1051 74 L 1051 74 L 1051 0 L 997 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1050 74 C 1074 74 1074 53 1098 53 L 1098 53 L 1098 0 L 1050 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1097 53 C 1123.5 53 1123.5 75 1150 75 L 1150 75 L 1150 0 L 1097 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1149 75 C 1173 75 1173 53 1197 53 L 1197 53 L 1197 0 L 1149 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1196 53 C 1223.5 53 1223.5 75 1251 75 L 1251 75 L 1251 0 L 1196 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1250 75 C 1275 75 1275 50 1300 50 L 1300 50 L 1300 0 L 1250 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1299 50 C 1325 50 1325 74 1351 74 L 1351 74 L 1351 0 L 1299 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1350 74 C 1373.5 74 1373.5 51 1397 51 L 1397 51 L 1397 0 L 1350 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1396 51 C 1423.5 51 1423.5 76 1451 76 L 1451 76 L 1451 0 L 1396 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1450 76 C 1473.5 76 1473.5 49 1497 49 L 1497 49 L 1497 0 L 1450 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1496 49 C 1511.5 49 1511.5 75 1527 75 L 1527 75 L 1527 0 L 1496 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1526 75 C 1541.5 75 1541.5 75 1557 75 L 1557 75 L 1557 0 L 1526 0 Z"
                        strokeWidth="0"></path>
                    <path
                        fill="rgba(255,255,255,1)"
                        d="M 1556 75 C 1566 75 1526 0 1536 0 L 1536 0 L 1536 0 L 1556 0 Z"
                        strokeWidth="0"></path>
                </svg>
            </div>
            <div className="items-center text-brown-100 w-4/5">
                <table className="table-auto border-2 border-gray-200 w-full mx-40  mb-20	">
                    <thead className="bg-gray-100	 text-lg font-body ">
                        <tr className="">
                            <th className="p-4"></th>
                            <th className="p-4">Product</th>
                            <th className="p-4">Price/half kg</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4">Customization Charges</th>
                            <th className="p-4">Total</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 text-center text-base ">
                                <Image
                                    className="rounded-lg  w-full"
                                    src={cake_img}
                                    alt="bg"
                                    width={93}
                                    height={102}
                                />
                            </td>
                            <td className="p-4 text-center ">Flowers cake</td>
                            <td className="p-4 text-center ">₹500</td>
                            <td className="p-4 text-center ">half kg</td>
                            <td className="p-4 text-center ">₹50</td>
                            <td className="p-4 text-center ">₹550</td>
                            <td className="p-4 text-center text-red bg-red  ">
                                <a className="cursor-pointer">
                                    <ImCross color="red" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 text-center text-base ">
                                <Image
                                    className="rounded-lg  w-full"
                                    src={cake_img2}
                                    alt="bg"
                                    width={93}
                                    height={102}
                                />
                            </td>
                            <td className="p-4 text-center ">Rose cake</td>
                            <td className="p-4 text-center ">₹500</td>
                            <td className="p-4 text-center ">half kg</td>
                            <td className="p-4 text-center ">₹50</td>
                            <td className="p-4 text-center ">₹550</td>
                            <td className="p-4 text-center text-red bg-red  ">
                                <a className="cursor-pointer">
                                    <ImCross color="red" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 text-center text-base ">
                                <Image
                                    className="rounded-lg  w-full"
                                    src={cake_img3}
                                    alt="bg"
                                    width={93}
                                    height={102}
                                />
                            </td>
                            <td className="p-4 text-center ">Chocolate Overloaded cake</td>
                            <td className="p-4 text-center ">₹500</td>
                            <td className="p-4 text-center ">half kg</td>
                            <td className="p-4 text-center ">₹50</td>
                            <td className="p-4 text-center ">₹550</td>
                            <td className="p-4 text-center text-red bg-red  ">
                                <a className="cursor-pointer">
                                    <ImCross color="red" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row-reverse">
                <div className=" w-1/3  mr-36  mb-4 ">
                    <h2 className="p-2 font-header text-lg text-brown-100 font-semibold	">
                        Cart totals
                    </h2>
                    <hr />
                    <div className="flex flex-row justify-between p-2 font-body text-base text-brown-100 font-semibold w-full ">
                        <p>Subtotal</p>
                        <p className="">₹ 1650</p>
                    </div>
                    <div className="flex flex-row justify-between p-2 font-body text-base text-brown-100 font-semibold">
                        <p>Offer</p>
                        <p>- ₹ 50</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between p-2 font-body text-base text-brown-100 font-semibold">
                        <p>Total</p>
                        <p className="text-myCyan-100">₹ 1600</p>
                    </div>
                    <hr />
                    < a href="/checkout">
                        <button className="bg-lightPink-100 m-2 mt-6 float-right rounded-full px-5 py-2 text-white bg-rose-400 text-base hover:bg-myCyan-100 transition-colors duration-200 ease-in-out">
                            Proceed to checkout
                        </button>
                    </a>
                </div>
            </div>{' '}
        </div>
    );
};
export default Cart;
