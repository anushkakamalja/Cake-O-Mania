import React from 'react';
import peopleList from '../assets/data/data';
import { useSwipeable } from 'react-swipeable';
import { Transition } from '@headlessui/react';
import { FaStar } from 'react-icons/fa';

import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const SlideShow = ({ src, isOpen }) => {
    const { name, image, text } = src;
    return (
        <div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacityduration-500"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 scale-100">
                <div className="flex justify-center p-4">
                    <img
                        src={image}
                        alt="img"
                        className="w-40 h-40 rounded-full shadow border-4"></img>
                </div>
                <div className="flex justify-center p-4">
                    <p className="font-header capitalize text-white text-3xl">{name}</p>
                </div>
                <div className="flex justify-center p-4 ">
                    <FaStar size={25} className="text-yellow-400 " />
                    <FaStar size={25} className="text-yellow-400" />
                    <FaStar size={25} className="text-yellow-400" />
                    <FaStar size={25} className="text-yellow-400" />
                    <FaStar size={25} className="text-yellow-400" />
                </div>

                <div className="flex justify-center ">
                    <p className="font-body text-white p-4 ">{text}</p>
                </div>
            </Transition>
        </div>
    );
};

const ReviewCarousal = () => {
    const [index, setIndex] = React.useState(0);
    const checkNumber = (number) => {
        if (number > peopleList.length - 1) {
            return 0;
        }
        if (number < 0) {
            return peopleList.length - 1;
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
            className="bg-rose-400 max-w-full  shadow-lg cursor-move p-4 relative"
            {...swipeHandlers}>
            <div className="flex justify-center p-4 text-white">
                <p className="font-header capitalize text-5xl ">Clients Say</p>
            </div>
            {peopleList.map((person, number) => (
                <SlideShow src={person} key={person.id} isOpen={index === number} />
            ))}
            <div className="">
                <HiOutlineChevronLeft
                    size={42}
                    className="cursor-pointer text-white absolute hover:text-blue-300 top-1/2 left-0 m-4 z-10"
                    onClick={prevPerson}
                />

                <HiOutlineChevronRight
                    size={42}
                    className="cursor-pointer text-white absolute  hover:text-blue-300 top-1/2 right-0 m-4 z-10"
                    onClick={nextPerson}
                />
            </div>
        </div>
    );
};

export default ReviewCarousal;
