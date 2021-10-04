import Image from 'next/image';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import cartCake from '../assets/images/cake3.jpg';

const CartItem = () => {
    return (
        <div className="rounded-2xl pt-3">
            <div className="pb-3">
                <Image src={cartCake} className="rounded-2xl" />
            </div>
            <div className="flex flex-row items-center justify-between pb-1">
                <RiAddLine className="border-2 border-red-300 hover:bg-red-300 hover:text-white" />
                <p className="font-body flex flex-row items-center m-1"> Quantity </p>
                <RiSubtractLine className="border-2 border-red-300 hover:bg-red-300 hover:text-white" />
            </div>
            <div className="flex flex-row items-center pb-1">
                <p className="font-header text-xl pl-5">Checkout</p>
                <p className="font-header text-l pl-5">₹Total</p>
            </div>
            <div className="font-header text-l border-2 w-auto border-red-300 hover:bg-red-300 hover:text-white cursor-pointer pl-20">
                Submit
            </div>
        </div>
    );
};
export default CartItem;
