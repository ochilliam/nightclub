import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import BarSVG from "../assets/bar.min.svg";

interface State {
    currentGuests: number;
    threshold?: number;
    thresholdPrompt?: boolean;
}

const Hero: React.FC = () => {
    const [state, updateState] = useState<State>({
        currentGuests: 0,
        threshold: 0,
        thresholdPrompt: true,
    });
    const { currentGuests, threshold, thresholdPrompt } = state;

    const onUsrThreshold = (evt: React.ChangeEvent<HTMLInputElement>) => {
        return updateState({
            currentGuests,
            threshold: evt.target.valueAsNumber,
            thresholdPrompt,
        });
    };

    const onUsrSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        return updateState({
            currentGuests,
            threshold,
            thresholdPrompt: false,
        });
    };

    const usrNewThreshold = () => {
        return updateState({ currentGuests, threshold, thresholdPrompt: true });
    };

    const increment = () => {
        return updateState({
            currentGuests: currentGuests + 1,
            threshold,
            thresholdPrompt,
        });
    };

    const decrement = () =>
        updateState({
            currentGuests: currentGuests - 1,
            threshold,
            thresholdPrompt,
        });

    const reachedMaxUsr = () => currentGuests === threshold && !thresholdPrompt;

    return (
        <>
            <div className="min-h-screen min-w-full bg-gray-100 font-sans">
                <div className="w-auto mx-auto pt-32 xl:max-w-screen-lg">
                    <div
                        className={`grid grid-cols-2 grid-rows-1 row-gap-16 p-3 md:row-gap-0 md:grid-rows-none md:grid-cols-5 ${
                            thresholdPrompt && "hidden"
                        }`}
                    >
                        <button
                            disabled={currentGuests === threshold && true}
                            className="counter-btn"
                            onClick={increment}
                        >
                            <FiChevronUp className="counter-btn--svg" />
                        </button>
                        <div className="w-full flex flex-1 items-center justify-center h-56 border-2 border-gray-500 rounded-md col-start-1 col-end-3 md:col-start-2 md:col-end-5">
                            <img
                                src={BarSVG}
                                className="h-56 -ml-2"
                                alt="two people in bar"
                            />

                            <div className="-ml-2 lg:p-4">
                                <h2 className="uppercase mb-4 text-center text-sm text-gray-700 sm:text-base md:text-lg md:text-center xl:text-2xl lg:mb-4">
                                    currently hosting
                                </h2>
                                {reachedMaxUsr ? (
                                    <>
                                        <p className="hidden bg-red-600 text-sm text-center text-white px-2 py-1 rounded-full sm:block">
                                            {currentGuests} guests! We’re full!
                                            No more!
                                        </p>
                                        {/* ==================== ONLY SHOWN FOR MOBILE ==================== */}
                                        <p className="w-2/3 text-center mx-auto py-1 font-medium text-white rounded-full bg-blue-700 md:w-1/2 md:py-2 sm:hidden">
                                            {currentGuests}
                                        </p>
                                        {/* ==================== /ONLY SHOWN FOR MOBILE ==================== */}
                                    </>
                                ) : (
                                    <p className="w-2/3 text-center mx-auto py-1 font-medium text-white rounded-full bg-blue-700 md:w-1/2 md:py-2">
                                        {currentGuests}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            className="counter-btn"
                            onClick={decrement}
                            disabled={currentGuests <= 0 && true}
                        >
                            <FiChevronDown className="counter-btn--svg" />
                        </button>
                    </div>

                    {/* ======================  (USER INPUT THRESHOLD) ======================= */}
                    <div className="h-full max-w-2xl mx-auto">
                        <div className="font-sans text-gray-800 w-auto mx-auto ">
                            <form
                                className="p-4 text-base md:mx-4 md:px-24 xl:w-3/6 xl:ml-10 xl:px-0 xl:mx-0"
                                onSubmit={onUsrSubmit}
                            >
                                {thresholdPrompt && (
                                    <label htmlFor="threshold">
                                        Hi there, <br />
                                        before you continue, we need you to set
                                        a maximum guests number so that we can
                                        alarm you when the bar is full.
                                    </label>
                                )}

                                {!thresholdPrompt && (
                                    <label htmlFor="threshold">
                                        <a
                                            href="#1"
                                            onClick={usrNewThreshold}
                                            className="fixed top-0 left-0 text-sm mx-3 mt-3 text-blue-600 underline md:mx-0 md:static md:mr-2"
                                        >
                                            Need to change maximum guests?
                                        </a>
                                        <span className="fixed top-0 left-0 mx-3 mt-8 text-sm text-gray-600 md:static md:m-0">
                                            current: <b>{threshold}</b>
                                        </span>
                                    </label>
                                )}
                                <div
                                    className={`flex my-4 ${
                                        !thresholdPrompt && "hidden"
                                    }`}
                                >
                                    <input
                                        type="number"
                                        onChange={onUsrThreshold}
                                        className="w-full"
                                        placeholder="i.e 25"
                                        value={threshold || ""}
                                        name="set threshold"
                                        id="threshold"
                                    />
                                    <input
                                        type="submit"
                                        className="text-sm uppercase w-32 ml-2"
                                        value="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ======================  /USER INPUT THRESHOLD ======================= */}

                    {/* ======================  MAXIMUM ALERT ======================= */}
                    {currentGuests === threshold && !thresholdPrompt && (
                        <div className="min-w-full h-8 fixed bottom-0 mb-5 inset-x-0 text-center md:hidden">
                            <p className="bg-red-600 text-white text-sm m-2 py-2 rounded-md ">
                                {currentGuests} guests! We’re full! No more!
                            </p>
                        </div>
                    )}
                    {/* ======================  /MAXIMUM ALERT ======================= */}
                </div>
            </div>
        </>
    );
};

export default Hero;
