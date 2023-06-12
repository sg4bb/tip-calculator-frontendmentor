"use client";

import { useState } from "react";

// ✨ assets
import PersonIcon from "@/components/icons/PersonIcon";

export default function Home() {
  const [bill, setBill] = useState(142.55);

  const [peoples, setPeoples] = useState(5);

  const [tip, setTip] = useState(0.15);

  const [customTip, setCustomTip] = useState(undefined);

  const handleTip = (tipAmount) => {
    setTip(tipAmount);
  };

  const resetValues = () => {
    setBill(142.55);
    setPeoples(5);
    setTip(0.15);
    setCustomTip(undefined);
  };

  return (
    <>
      <div className="bg-white min-w-fit w-full md:w-auto rounded-t-2xl md:rounded-xl p-7 flex justify-center md:justify-start flex-wrap space-y-5 md:space-y-0 space-x-0 md:space-x-10">
        <section className="flex flex-col min-w-full md:min-w-[300px] mt-0 md:mt-3 space-y-10 px-2">
          <div>
            <h2 className="text-sm md:text-xs text-grayish-cyan">Bill</h2>

            <div className="relative flex items-center justify-around mt-2">
              <input
                className=" text-very-dark-cyan outline-none hover:outline-2 hover:outline-strong-cyan duration-300 focus:ring-0 focus:outline-2 focus:outline-strong-cyan rounded-sm w-full text-end"
                name="bill"
                type="number"
                value={bill}
                onChange={(e) =>
                  e.target.value >= 0 &&
                  e.target.value <= 9999.99 &&
                  setBill(e.target.value.trim())
                }
              />
              <h2 className="absolute left-2 text-dark-grayish-cyan opacity-40 flex-grow">
                $
              </h2>
            </div>
          </div>

          <div>
            <h2 className="text-sm md:text-xs text-grayish-cyan">
              Select Tip %
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 items-center w-full justify-around gap-3 text-[24px] md:text-[19px]">
              <button
                className={`${
                  tip !== 0.05 ? "bg-very-dark-cyan" : "bg-strong-cyan"
                } text-white text-center py-2 w-full rounded-md duration-500`}
                onClick={() => handleTip(0.05)}
              >
                5%
              </button>

              <button
                className={`${
                  tip !== 0.1 ? "bg-very-dark-cyan" : "bg-strong-cyan"
                } text-white text-center py-2 w-full rounded-md duration-500`}
                onClick={() => handleTip(0.1)}
              >
                10%
              </button>

              <button
                className={`${
                  tip !== 0.15 ? "bg-very-dark-cyan" : "bg-strong-cyan"
                } text-white text-center py-2 w-full rounded-md duration-500`}
                onClick={() => handleTip(0.15)}
              >
                15%
              </button>

              <button
                className={`${
                  tip !== 0.25 ? "bg-very-dark-cyan" : "bg-strong-cyan"
                } text-white text-center py-2 w-full rounded-md duration-500`}
                onClick={() => handleTip(0.25)}
              >
                25%
              </button>

              <button
                className={`${
                  tip !== 0.5 ? "bg-very-dark-cyan" : "bg-strong-cyan"
                } text-white text-center py-2 w-full rounded-md duration-500`}
                onClick={() => handleTip(0.5)}
              >
                50%
              </button>

              <input
                type="number"
                className="text-very-dark-cyan placeholder:text-dark-grayish-cyan text-end placeholder:text-end py-1 rounded-sm max-w-[92px] ring-0 outline-none focus:outline focus:outline-strong-cyan hover:outline-strong-cyan duration-300"
                value={customTip}
                placeholder="Custom"
                max={100}
                min={0}
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm md:text-xs flex">
              <span className="text-grayish-cyan flex-grow">
                Number of People
              </span>
              {peoples <= 0 && (
                <span className="text-orange-600">Cant be a zero</span>
              )}
            </h2>

            <div className="relative flex items-center justify-around mt-2">
              <input
                type="number"
                name="peoples"
                className={`text-very-dark-cyan px-1 ${
                  peoples > 0
                    ? "outline-none"
                    : "outline outline-2 outline-orange-600"
                } ${
                  peoples > 0
                    ? "hover:outline-strong-cyan"
                    : "hover:outline-orange-600"
                } duration-300 focus:ring-0 focus:outline-2 ${
                  peoples > 0
                    ? "focus:outline-strong-cyan"
                    : "focus:outline-orange-600"
                } rounded-sm w-full text-end`}
                max={99}
                min={1}
                value={peoples}
                onChange={(e) => setPeoples(e.target.value)}
              />
              <span className="absolute left-3">
                <PersonIcon />
              </span>
            </div>
          </div>
        </section>

        <section className="text-white bg-very-dark-cyan px-5 pt-8 pb-5 md:p-8 rounded-xl w-full md:w-auto min-w-[350px]">
          <div className="flex space-x-20 items-center">
            <article className="flex flex-col flex-grow">
              <h2 className="text-xs">Tip Amount</h2>
              <h2 className="text-[0.7rem] opacity-30">/ person</h2>
            </article>
            <h2 className="text-4xl text-strong-cyan">
              ${peoples > 0 ? ((bill * tip) / peoples).toFixed(2) : "0.00"}
            </h2>
          </div>

          <div className="flex space-x-20 items-center mt-3 md:mt-10">
            <article className="flex flex-col flex-grow">
              <h2 className="text-xs">Total</h2>
              <h2 className="text-[0.7rem] opacity-30">/ person</h2>
            </article>
            <h2 className="text-4xl text-strong-cyan">
              $
              {peoples > 0
                ? (bill / peoples + (bill * tip) / peoples).toFixed(2)
                : "0.00"}
            </h2>
          </div>

          <div className="flex justify-end">
            <button
              className="w-full bg-strong-cyan hover:bg-grayish-cyan-light hover:duration-700 text-very-dark-cyan text-center uppercase text-sm py-3 rounded-md mt-7 md:mt-32"
              onClick={resetValues}
            >
              Reset
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
