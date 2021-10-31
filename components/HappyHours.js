import { useState, useEffect } from 'react';
import cakeImage from '../assets/images/Happy hour.png';
import Image from 'next/image';

const Clock = () => {
    const date = new Date();
    const [currentSeconds, setSeconds] = useState(60 - date.getSeconds());
    const [currentHours, setHour] = useState(19 - date.getHours());
    const [currentMinutes, setMinutes] = useState(60 - date.getMinutes());
    const timerSeconds = () => setSeconds((currentSeconds) => currentSeconds - 1);
    if (currentSeconds < 0) {
        setSeconds(59);
        setMinutes(60 - date.getMinutes());
    }
    if (currentMinutes < 0) {
        setHour(19 - date.getHours());
    }
    if (currentHours < 0) {
        setHour(19 - (date.getHours() % 12));
    }
    useEffect(() => {
        const id = setInterval(timerSeconds, 1000);
        return () => clearInterval(id);
    }, [currentSeconds]);

    return (
        <div className="pt-2">
            <p className="">
                {currentHours}: {currentMinutes}: {currentSeconds}
            </p>
        </div>
    );
};

const HappyHours = () => {
    return (
        <div className="relative m-0 p-0 items-center">
            <Image src={cakeImage} className="h-full shadow-2xl" />
            <div className="left-1/3 ml-32 absolute top-1/3 p-8 font-header w-max text-white">
                <div className="flex flex-col p-3">
                    <p className=" text-7xl ">Happy Hours</p>
                </div>
                <div className="text-9xl">
                    <Clock />
                </div>
                <p>Everyday at 8pm</p>
            </div>
        </div>
    );
};

export default HappyHours;
