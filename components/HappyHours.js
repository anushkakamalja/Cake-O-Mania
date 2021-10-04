import react from 'react';
import { useState, useEffect } from 'react';
import cakeImage from '../assets/images/Happy hour.png';
import cakeDivider from '../assets/images/cakedivider.png';
import Image from 'next/image';

const Clock = () => {
    const date = new Date();
    const [currentSeconds, setSeconds] = useState(60 - date.getSeconds());
    const [currentHours, setHour] = useState(20 - (date.getHours() % 12));
    const [currentMinutes, setMinutes] = useState(60 - date.getMinutes());
    if (currentMinutes < 0) {
        setMinutes(60 - date.getMinutes());
    }
    const timerSeconds = () => setSeconds(currentSeconds - 1);

    useEffect(() => {
        if (currentSeconds < 0) {
            setSeconds(59);
            setMinutes(60 - date.getMinutes());
        }
        const id = setInterval(timerSeconds, 1000);
        return () => clearInterval(id);
    }, [currentSeconds]);

    useEffect(() => {
        if (currentMinutes < 0) {
            setSeconds(59);
            setHour((date.getHours() % 12) + 8);
        }
    }, [currentMinutes]);

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
        <div className="relative shadow-2xl rounded-2xl items-center">
            <div>
                <Image src={cakeImage} />
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
        </div>
    );
};

export default HappyHours;
