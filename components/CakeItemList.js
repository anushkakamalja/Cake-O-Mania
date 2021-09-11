import React from "react";
import CakeItem from "./CakeItem";
import cakeList from "../assets/data/cakedata"

const CakeItemList = () => {
    return (
        <div className="flex  justify-center">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 pl-8 pb-8 ">
                {cakeList.map((cakeData) => (
                    <CakeItem
                        src={cakeData}
                        key={cakeData.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CakeItemList;