import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Bar from "../assets/bar.svg";
const Hero: React.FC = () => {
    var [guest, setGuest] = useState<number>(10);
    const increaseGuest = () => {
        setGuest(guest + 1);
    };

    const decreaseGuest = () => setGuest(guest - 1);
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className="h-full mx-32 py-32">
                    <div className="grid grid-cols-5">
                        <button className="counter-btn" onClick={increaseGuest}>
                            <FiChevronUp className="counter-btn--svg" />
                        </button>
                        <div className="w-full h-56 border-2 border-gray-500 rounded-md col-start-2 col-end-5 flex items-center justify-center">
                            <img src={Bar} className="h-56 inline" alt="" />
                            <div className="block p-8 w-auto">
                                <h2 className="uppercase mb-4 text-2xl text-gray-700">
                                    currently hosting
                                </h2>
                                <p className="w-auto py-2 font-medium text-yellow-100 mx-8 tracking-wide rounded-full bg-blue-700 text-center">
                                    {guest}
                                </p>
                            </div>
                        </div>
                        <button className="counter-btn" onClick={decreaseGuest}>
                            <FiChevronDown className="counter-btn--svg" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
