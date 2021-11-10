import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
const Icons = () => {
    return (
        <div className=" w-96 flex flex-row justify-between ml-20 mr-20 mb-20 mt-5">
            <a href="https://www.instagram.com/cakeomania_by_anushka/" target="_blank">
                <AiOutlineInstagram
                    className="ml-4 mr-4 transform transition duration-500 hover:scale-150"
                    size={60}
                />
            </a>
            <a href="https://www.facebook.com/cakeomania.by.anushka/" target="_blank">
                <AiOutlineFacebook
                    className="ml-4 mr-4 transform transition duration-500 hover:scale-150 "
                    size={60}
                />
            </a>
            <a href="https://wa.me/9619238916" target="_blank">
                <AiOutlineWhatsApp
                    className="ml-4 mr-4 transform transition duration-500 hover:scale-150 "
                    size={60}
                />
            </a>
            <a href="tel:919619238916" target="_blank">
                <FiPhone
                    className=" ml-4 mr-4 transform transition duration-500 hover:scale-150"
                    size={55}
                />
            </a>
        </div>
    );
};
export default Icons;
