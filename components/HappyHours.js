import react from 'react';
import { useState, useEffect } from 'react';
import cakeImage from '../assets/images/cake4.jpg';
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
            setMinutes(currentMinutes - 1);
        }
        const id = setInterval(timerSeconds, 1000);
        return () => clearInterval(id);
    }, [currentSeconds]);

    useEffect(() => {
        if (currentMinutes < 0) {
            setSeconds(60);
            setHour((date.getHours() % 12) + 8);
        }
    }, [currentMinutes]);

    return (
        <div>
            <div className="font-header text-6xl ">
                <text className="bg-white text-black">
                    {currentHours}: {currentMinutes}: {currentSeconds}
                </text>
            </div>
        </div>
    );
};

const HappyHours = () => {
    return (
        <div className="relative flex flex-col shadow-2xl rounded-2xl items-center p-4">
            <div className="pb-8 flex flex-col ">
                <text className="font-header md:text-9xl text-5xl text-mybrown-100 ">
                    Happy Hours
                </text>
                <div className="flex justify-center pt-8">
                    <Image src={cakeDivider} />
                </div>
            </div>
            <div className="flex flex-row">
                <div>
                    <Image src={cakeImage} />
                </div>

                <div className=" bg-black w-1/2">
                    <Clock />
                </div>
            </div>
        </div>
    );
};

export default HappyHours;
