import React from 'react';
import { ImCross } from 'react-icons/im';

function CartItem(cake) {
    return (
        <div>
            <tr>
                <td className="p-4 text-center text-base ">
                    <div className="w-32 h-32">
                        <img src={cake.image_url} alt="img"></img>
                    </div>
                </td>
                <td className="p-4 text-center ">{cake.name}</td>
                <td className="p-4 text-center ">₹{cake.price_per_half_kg}</td>
                <td className="p-4 text-center ">half kg</td>

                <td className="p-4 text-center ">₹{cake.price_per_half_kg}</td>
                <td className="p-4 text-center text-red bg-red  ">
                    <div className="cursor-pointer">
                        <ImCross color="red" />
                    </div>
                </td>
            </tr>
        </div>
    );
}

export default CartItem;
