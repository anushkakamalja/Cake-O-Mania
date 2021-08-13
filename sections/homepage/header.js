import logo from '../../public/images/logo2.png';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div className="flex flex-row z-20">
                <div className="w-full flex flex-row justify-around font-header text-xl  ">
                    <div className="  flex flex-row justify-around  w-1/3 content-around text-right pt-12 ">
                        <div className="py-4 px-2 hover:text-mymyCyan-100 cursor-pointer ">
                            <a > Home</a>
                        </div>
                        <div className="py-4 px-2 hover:text-myCyan-100 cursor-pointer">
                            <a>Catalog</a>
    
                        </div>
                        <div className=" group relative dropdown py-4 px-2 cursor-pointer z-20 ">
                            <a className="hover:text-myCyan-100 "> Specialities</a>
    
                            <div className=" border-myCyan-100 w-36 p-4 text-lg mt-4 bg-white content-right text-center font-body border-myCyan-100 border-4 rounded-lg group-hover:block dropdown-menu absolute hidden h-auto">
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Cakes</a>
                                </div>
                                <hr className="bg-myCyan-100 h-0.5 p-px w-1/3 m-auto" />
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Cupcakes</a>
                                </div>
                                <hr className="bg-myCyan-100 h-0.5 p-px w-1/3 m-auto " />
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Donuts</a>
                                </div>
                                <hr className="bg-myCyan-100 h-0.5 p-px w-1/3 m-auto " />
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Tea-Time Cakes</a>
                                </div>
                                <hr className="bg-myCyan-100 h-0.5 p-px w-1/3 m-auto " />
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Cookies</a>
                                </div>
                                <hr className="bg-myCyan-100 h-0.5 p-px w-1/3 m-auto " />
                                <div className="p-1.5 hover:text-myCyan-100 cursor-pointer">
                                    <a>Chocolates</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-20  absolute "   >
                        <Image  src={logo} alt="logo" width={200} height={200} />
                    </div>
                    <div className="  flex flex-row justify-around w-1/3 relative  content-around text-right  pt-12">
                        <div className="py-4 px-2 hover:text-myCyan-100 cursor-pointer">
                            <a >Offers</a>
                        </div>
                        <div className="py-4 px-2 hover:text-myCyan-100 cursor-pointer">
                            <a >Contacts</a>
                        </div>
                        <div className="py-4 px-2 hover:text-myCyan-100 cursor-pointer">
                            <a >Reviews</a>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row justify-around  pt-14 px-2 content-between w-32 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="relative -top-4 mt-0 top-0 z-10" >
                <svg viewBox="0 0 1536 165" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fill="rgba(0,0,0,1)" d="M 0 48 C 23 48 23 70 46 70 L 46 70 L 46 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(0,0,0,1)" d="M 45 70 C 69 70 69 50 93 50 L 93 50 L 93 0 L 45 0 Z" stroke-width="0"></path> <path fill="rgba(0,0,0,1)" d="M 92 50 C 117.5 50 117.5 75 143 75 L 143 75 L 143 0 L 92 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 142 75 C 169 75 169 50 196 50 L 196 50 L 196 0 L 142 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 195 50 C 218.5 50 218.5 74 242 74 L 242 74 L 242 0 L 195 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 241 74 C 269.5 74 269.5 51 298 51 L 298 51 L 298 0 L 241 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 297 51 C 321.5 51 321.5 73 346 73 L 346 73 L 346 0 L 297 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 345 73 C 373.5 73 373.5 50 402 50 L 402 50 L 402 0 L 345 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 401 50 C 424 50 424 76 447 76 L 447 76 L 447 0 L 401 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 446 76 C 472.5 76 472.5 50 499 50 L 499 50 L 499 0 L 446 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 498 50 C 523.5 50 523.5 75 549 75 L 549 75 L 549 0 L 498 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 548 75 C 574.5 75 574.5 49 601 49 L 601 49 L 601 0 L 548 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 600 49 C 623.5 49 623.5 71 647 71 L 647 71 L 647 0 L 600 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 646 71 C 675.5 71 675.5 52 705 52 L 705 52 L 705 0 L 646 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 704 52 C 726 52 726 75 748 75 L 748 75 L 748 0 L 704 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 747 75 C 772 75 772 52 797 52 L 797 52 L 797 0 L 747 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 796 52 C 823 52 823 75 850 75 L 850 75 L 850 0 L 796 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 849 75 C 873.5 75 873.5 52 898 52 L 898 52 L 898 0 L 849 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 897 52 C 922 52 922 75 947 75 L 947 75 L 947 0 L 897 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 946 75 C 972 75 972 52 998 52 L 998 52 L 998 0 L 946 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 997 52 C 1024 52 1024 74 1051 74 L 1051 74 L 1051 0 L 997 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1050 74 C 1074 74 1074 53 1098 53 L 1098 53 L 1098 0 L 1050 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1097 53 C 1123.5 53 1123.5 75 1150 75 L 1150 75 L 1150 0 L 1097 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1149 75 C 1173 75 1173 53 1197 53 L 1197 53 L 1197 0 L 1149 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1196 53 C 1223.5 53 1223.5 75 1251 75 L 1251 75 L 1251 0 L 1196 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1250 75 C 1275 75 1275 50 1300 50 L 1300 50 L 1300 0 L 1250 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1299 50 C 1325 50 1325 74 1351 74 L 1351 74 L 1351 0 L 1299 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1350 74 C 1373.5 74 1373.5 51 1397 51 L 1397 51 L 1397 0 L 1350 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1396 51 C 1423.5 51 1423.5 76 1451 76 L 1451 76 L 1451 0 L 1396 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1450 76 C 1473.5 76 1473.5 49 1497 49 L 1497 49 L 1497 0 L 1450 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1496 49 C 1511.5 49 1511.5 75 1527 75 L 1527 75 L 1527 0 L 1496 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1526 75 C 1541.5 75 1541.5 75 1557 75 L 1557 75 L 1557 0 L 1526 0 Z" stroke-width="0"></path><path fill="rgba(0,0,0,1)" d="M 1556 75 C 1566 75 1526 0 1536 0 L 1536 0 L 1536 0 L 1556 0 Z" stroke-width="0"></path></svg>
            </div>
            </header>
    );
};

export default Header;
