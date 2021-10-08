
import React from 'react';
import CakeItem from './CakeItem';

const CakeItemList = ({ allCakes }) => {


    return (
        <div className="flex  justify-center">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 pl-8 pb-8 ">
                {allCakes.map((cakeData) => (
                    <CakeItem src={cakeData} key={cakeData.name} />
                ))}
            </div>
        </div>
    );
};

export default CakeItemList;