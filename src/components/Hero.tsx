import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import BarSVG from "../assets/bar.svg";

interface State {
    currentGuests: number;
    threshold?: number;
    thresholdPrompt?: boolean;
}

const Hero: React.FC = () => {
    const [state, updateState] = useState<State>({
        currentGuests: 0,
        threshold: 0,
        thresholdPrompt: false,
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

    return (
        <>
            <div className="min-h-screen min-w-full bg-gray-100 font-sans">
                <div className="w-auto h-full mx-auto py-24 md:max-w-screen-md xl:max-w-screen-lg lg:py-40">
                    <div
                        className={`grid grid-cols-5 ${
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
                        <div className="w-full h-56 border-2 border-gray-500 rounded-md col-start-2 col-end-5 flex flex-col items-center justify-center md:flex-row">
                            <img
                                src={BarSVG}
                                className="h-56 inline"
                                alt="two people in bar"
                            />
                            <div className="block w-auto lg:p-8">
                                <h2 className="uppercase mb-2 text-base text-gray-700 md:text-lg md:text-center xl:text-2xl lg:mb-4">
                                    currently hosting
                                </h2>
                                <p className="w-auto py-1 font-medium text-yellow-100 mx-10 mb-5 tracking-wide rounded-full bg-blue-700 text-center md:py-2 md:mx-8">
                                    {currentGuests}
                                </p>
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
                    <div className="h-full max-w-2xl mx-auto my-4">
                        <div className="text-xl font-sans text-gray-800 w-auto mx-auto ">
                            <form
                                className="w-3/6 md:w-1/2 xl:ml-8"
                                onSubmit={onUsrSubmit}
                            >
                                {thresholdPrompt && (
                                    <label htmlFor="threshold">
                                        Hi there, <br />
                                        before you continue, we you need to set
                                        a maximum guests number so that we can
                                        alarm you when the bar is full.
                                    </label>
                                )}

                                {!thresholdPrompt && (
                                    <label htmlFor="threshold">
                                        <a
                                            href="#1"
                                            onClick={usrNewThreshold}
                                            className="fixed top-0 left-0 text-sm mx-3 mt-3 hover:text-blue-600 hover:underline md:pr-4 md:mx-0 md:static"
                                        >
                                            Need a new threshold?
                                        </a>
                                        <span className="fixed top-0 left-0 mx-3 mt-8 text-sm text-gray-600 md:static md:m-0">
                                            current threshold:{" "}
                                            <b>{threshold}</b>
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
                                        className="w-32 ml-2"
                                        value="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ======================  /USER INPUT THRESHOLD ======================= */}

                    {/* ======================  MAXIMUM ALERT ======================= */}
                    {currentGuests === threshold && !thresholdPrompt && (
                        <div className="w-99 m-1 fixed bottom-0 text-center md:top-0 md:w-99-lg lg:left-0">
                            <p className="bg-red-600 text-white py-2 tracking-wide rounded-md">
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
