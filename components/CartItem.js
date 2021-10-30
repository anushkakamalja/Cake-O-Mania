import React from 'react';
import { ImCross } from 'react-icons/im';
import { deletefromcart } from '../adapters/cakeApi';
const CartItem = ({ cake }) => {
    const deletecartitem = async () => {
        const response = await deletefromcart(cake._id);
        console.log(response);
        window.location.reload();
    };

    return (
        <tr className="border-b-2 border-opacity-50 border-black-100">
            <td className="p-4 text-center text-base ">
                <div className="ml-8 w-32 h-32">
                    <img src={cake.image_url} alt="img"></img>
                </div>
            </td>
            <td className="p-4 text-center font-header">{cake.name}</td>
            <td className="p-4 text-center font-header">₹{cake.price_per_half_kg}</td>
            <td className="p-4 text-center font-header">half kg</td>

            <td className="p-4 text-center font-header">₹{cake.price_per_half_kg}</td>
            <td className="p-4 text-center text-red bg-red  ">
                <div className="cursor-pointer">
                    <ImCross color="red" onClick={deletecartitem} />
                </div>
            </td>
        </tr>
    );
};

export default CartItem;
