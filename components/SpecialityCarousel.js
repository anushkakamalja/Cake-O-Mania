import React from 'react';
import specialities from '../assets/data/specdata';
import { useSwipeable } from 'react-swipeable';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import cakedivider from '../assets/images/cakedivider.png';

const SlideShow = ({ data }) => {
    const spec1 = data[0];
    const spec2 = data[1];
    const spec3 = data[2];
    const spec4 = data[3];

    return (
        <div>
            <Transition
                show={true}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 scale-100">
                <div className=" w-4/5 h-96 flex flex-row  justify-around  items-start">
                    <Speciality
                        text={spec1.text}
                        src={spec1.src}
                        key={spec1.key}
                        name={spec1.type}
                    />
                    <Speciality
                        text={spec2.text}
                        src={spec2.src}
                        key={spec2.key}
                        name={spec2.type}
                    />
                    <Speciality
                        text={spec3.text}
                        src={spec3.src}
                        key={spec3.key}
                        name={spec3.type}
                    />
                    <Speciality
                        text={spec4.text}
                        src={spec4.src}
                        key={spec4.key}
                        name={spec4.type}
                    />
                </div>
            </Transition>
        </div>
    );
};

const SpecialityCarousel = () => {
    const [index, setIndex] = React.useState(0);
    const checkNumber = (number) => {
        if (number > specialities.length - 1) {
            return 0;
        }
        if (number < 0) {
            return specialities.length - 1;
        }
        return number;
    };
    const nextGroup = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevGroup = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const swipeHandlers = useSwipeable({
        onSwipedRight: nextGroup,
        onSwipedLeft: prevGroup,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div
            className="bg-spec bg-cover bg-opacity-10 bg-no-repeat h-screen min-w-full mt-10 mb-10 flex flex-col justify-between items-center"
            {...swipeHandlers}>
            <div className=" bg-white bg-transparent bg-opacity-70 h-full min-w-full  flex flex-col justify-start items-center">
                <div className="flex flex-col justify-around items-center mb-20 pt-20">
                    <Image src={cakedivider} alt="logo" width={181} height={41} className="mt-20" />
                    <h1 className="font-header text-mybrown-100 pt-5 text-8xl mt-10 mb-10">
                        Our Specialities
                    </h1>
                </div>

                <div className=" w-full h-96 flex flex-row  justify-center items-center">
                    <HiOutlineChevronLeft
                        size={42}
                        className="cursor-pointer text-black  w-1/4 hover:text-blue-300"
                        onClick={prevGroup}
                    />
                    <SlideShow data={specialities[index]} key={specialities[index]} />
                    <HiOutlineChevronRight
                        size={50}
                        className="cursor-pointer text-black absolute right-40 hover:text-blue-300"
                        onClick={nextGroup}
                    />
                </div>
            </div>
        </div>
    );
};

const Speciality = ({ src, text, name }) => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <div className="absolute top-7">
                <Image src={src} width={110} height={110} alt="spec" />
            </div>
            <div>
                <svg
                    x="0px"
                    y="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="stroke-8 h-44  fill-transparent hover:fill-cyan">
                    <path
                        className="stroke-cyan text-white hover:text-myCyan-100  transition duration-500"
                        d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5
			c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1
			c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2
			c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7
			c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6
			c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4
			c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5
			c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4
			c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7
			c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6
			c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6
			c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9
			c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
                </svg>
            </div>

            <h2 className="font-header text-mybrown-100 text-4xl mt-5  text-center">{name}</h2>
            <h3 className="font-header text-mybrown-100 text-2xl mt-5 mb-10 text-center">{text}</h3>
        </div>
    );
};

export default SpecialityCarousel;
