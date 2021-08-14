import React from 'react';
import people from '../assets/data/data';
import { useSwipeable } from 'react-swipeable';
import { FaStar } from 'react-icons/fa';

import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const ReviewCarousal = () => {
    const [index, setIndex] = React.useState(0);
    const { name, ratings, image, text } = people[index];
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const swipeHandlers = useSwipeable({
        onSwipedRight: nextPerson,
        onSwipedLeft: prevPerson,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div
            className="bg-pink-400 rounded-xl p-8 max-w-full my-10 shadow-lg cursor-move  "
            {...swipeHandlers}>
            <div className="flex justify-center p-4 text-white">
                <text className="font-header capitalize text-5xl ">Clients Say</text>
            </div>
            <div className="flex justify-center p-4">
                <img src={image} alt="img" className="w-40 h-40 rounded-full shadow border-4"></img>
            </div>
            <div className="flex justify-center p-4">
                <text className="font-header capitalize text-white text-3xl">{name}</text>
            </div>
            <div className="flex justify-center p-8 ">
                <HiOutlineChevronLeft
                    size={42}
                    className="  cursor-pointer text-white absolute left-0"
                    onClick={prevPerson}
                />
                <FaStar size={25} className="text-yellow-400 " />
                <FaStar size={25} className="text-yellow-400" />
                <FaStar size={25} className="text-yellow-400" />
                <FaStar size={25} className="text-yellow-400" />
                <FaStar size={25} className="text-yellow-400" />
                <HiOutlineChevronRight
                    size={42}
                    className="cursor-pointer text-white absolute right-0 "
                    onClick={nextPerson}
                />
            </div>
            <div className="flex justify-center p-4">
                <p className="font-body text-white pl-8 ">{text}</p>
            </div>
        </div>
    );
};

export default ReviewCarousal;
