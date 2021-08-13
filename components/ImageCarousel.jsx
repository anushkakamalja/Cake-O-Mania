import React from 'react';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const ImageComponent = ({ src, isOpen }) => {
    return (
        <>
            <Transition
                show={isOpen}
                enter="transition transform duration-1000"
                enterFrom="opacity-0 scale-150"
                enterTo="opacity-100 scale-100"
                leave="transition transform duration-500"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-50"
                className="absolute w-full">
                <div className="w-full h-full absolute bg-black opacity-20" />
                <img src={src} alt="Cake" className="w-screen max-h-screen mx-auto" />
            </Transition>
        </>
    );
};

const ImageCarousel = ({ images }) => {
    const [activeImage, setActiveImage] = React.useState(0);
    return (
        <div className="relative min-h-screen overflow-hidden">
            <button
                className="absolute top-1/2 left-0 m-4 cursor-pointer p-2 z-10"
                onClick={() => {
                    setActiveImage(
                        (((activeImage - 1) % images.length) + images.length) % images.length
                    );
                }}>
                <HiOutlineChevronLeft
                    size={42}
                    className="text-white hover:text-gray-300 transition duration-200"
                />
            </button>
            {images.map((imageSrc, index) => (
                <ImageComponent src={imageSrc} key={imageSrc} isOpen={activeImage === index} />
            ))}
            <button
                className="absolute top-1/2 right-0 m-4 rounded-full cursor-pointer p-2 z-10"
                onClick={() => {
                    setActiveImage((activeImage + 1) % images.length);
                }}>
                <HiOutlineChevronRight
                    size={42}
                    className="text-white hover:text-gray-300 transition duration-200"
                />
            </button>
            <div className="absolute z-10 left-1/2 bottom-12 flex space-x-4 transform -translate-x-1/2">
                <Dots
                    images={images}
                    clickHandler={(number) => setActiveImage(number)}
                    activeImage={activeImage}
                />
            </div>
        </div>
    );
};

const Dots = ({ images, clickHandler, activeImage }) => {
    return (
        <>
            {images.map((imageSrc, index) => (
                <button
                    className={clsx(
                        'w-3 h-3 rounded-full bg-sky-100',
                        activeImage === index && 'bg-sky-500'
                    )}
                    onClick={() => clickHandler(index)}
                    key={imageSrc}></button>
            ))}
        </>
    );
};

export default ImageCarousel;
