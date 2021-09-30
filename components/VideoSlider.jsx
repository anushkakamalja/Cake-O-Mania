import React from 'react';
import videoList from '../assets/data/videoLink';
import { useSwipeable } from 'react-swipeable';
import { Transition } from '@headlessui/react';

import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const SlideShow = ({ src, isOpen }) => {
    const { link } = src;
    return (
        <div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="">
                <iframe
                    className=" rounded   border-black border-2"
                    width="682"
                    height="428"
                    src={link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Transition>
        </div>
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
            <div className="flex mx-auto max-width-md">
                {videoList.map((video, number) => (
                    <SlideShow src={video} key={video.link} isOpen={index === number} />
                ))}
            </div>
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
