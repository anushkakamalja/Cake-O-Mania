import React from 'react';
import Speciality from './Speciality';
import specialities from '../assets/data/specdata';
const SpecialityCarousel = () => {
    return (
        <div className=" w-4/5 h-96 flex flex-row  justify-around items-start">
            {specialities.map((speciality) => (
                <Speciality
                    text={speciality.text}
                    src={speciality.src}
                    key={speciality.src}
                    name={speciality.type}
                />
            ))}
        </div>
    );
};

export default SpecialityCarousel;
