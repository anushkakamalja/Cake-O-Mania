import React from 'react';
import videoList from '../assets/data/videoLink';
import { useSwipeable } from 'react-swipeable';
import { Transition } from '@headlessui/react';
import { FaStar } from 'react-icons/fa';

import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const SlideShow = ({ src, isOpen }) => {
    const { link } = src;
    return (
        <>
            <Transition
                className=" "
                show={isOpen}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacityduration-500"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 scale-100">
                <iframe
                    className=" rounded   border-black border-2"
                    width="682"
                    height="428"
                    src={link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </Transition>
        </>
    );
};

const VideoCarousel = () => {
    const [index, setIndex] = React.useState(0);
    const checkNumber = (number) => {
        if (number > videoList.length - 1) {
            return 0;
        }
        if (number < 0) {
            return videoList.length - 1;
        }
        return number;
    };
    const nextVideo = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevVideo = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const swipeHandlers = useSwipeable({
        onSwipedRight: nextVideo,
        onSwipedLeft: prevVideo,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    return (
        <div
            className=" max-w-full left-7 -top-4 my-16  cursor-move   relative "
            {...swipeHandlers}>
            {videoList.map((video, number) => (
                <SlideShow src={video} key={video.id} isOpen={index === number} />
            ))}
            <div className="">
                <HiOutlineChevronLeft
                    size={42}
                    className="cursor-pointer text-black absolute hover:text-red-500  top-1/2 -left-12 m-4 z-10"
                    onClick={prevVideo}
                />

                <HiOutlineChevronRight
                    size={42}
                    className="cursor-pointer text-black absolute  hover:text-red-500 top-1/2 -right-12  m-4 z-10"
                    onClick={nextVideo}
                />
            </div>
        </div>
    );
};

export default VideoCarousel;
