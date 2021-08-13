import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
const Icons = () => {
    return (
        <div className=" w-96 flex flex-row justify-between ml-20 mr-20 mb-20 mt-5">
            <AiOutlineInstagram
                className="ml-4 mr-4 transform transition duration-500 hover:scale-150"
                size={60}
            />
            <AiOutlineFacebook
                className="ml-4 mr-4 transform transition duration-500 hover:scale-150 "
                size={60}
            />
            <AiOutlineWhatsApp
                className="ml-4 mr-4 transform transition duration-500 hover:scale-150 "
                size={60}
            />
            <FiPhone
                className=" ml-4 mr-4 transform transition duration-500 hover:scale-150"
                size={55}
            />
        </div>
    );
};
export default Icons;
