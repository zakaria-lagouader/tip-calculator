import React, { useContext, useMemo } from "react";
import { AppContext } from "../AppContext";

function Result() {
  const { bill, tip, numberOfPeople, reset } = useContext(AppContext);

  const tipAmount = useMemo(
    () =>
      bill !== 0 && tip !== 0 && numberOfPeople !== 0
        ? (bill * (tip / 100)) / numberOfPeople
        : 0,
    [bill, tip, numberOfPeople]
  );

  const total = useMemo(
    () =>
      bill !== 0 && numberOfPeople !== 0
        ? bill / numberOfPeople + tipAmount
        : 0,
    [bill, numberOfPeople, tipAmount]
  );

  return (
    <div className="bg-cyan-dark py-4 px-6 flex flex-col rounded-xl ">
      <div className="flex items-center justify-between mb-14 mt-4">
        <div>
          <p className="text-white mb-1 font-semibold">Tip Amount</p>
          <p className="text-cyan-gray-dark-1 font-semibold text-sm">
            / persone
          </p>
        </div>
        <div className="font-bold text-5xl text-cyan-strong">
          ${tipAmount.toFixed(2)}
        </div>
      </div>
      <div className="flex items-center justify-between mb-14">
        <div>
          <p className="text-white mb-1 font-semibold">Total</p>
          <p className="text-cyan-gray-dark-1 font-semibold text-sm">
            / persone
          </p>
        </div>
        <div className="font-bold text-5xl text-cyan-strong">
          ${total.toFixed(2)}
        </div>
      </div>
      <button
        disabled={bill === 0}
        onClick={reset}
        className="bg-cyan-strong font-bold text-lg text-cyan-dark py-2 rounded-md mt-auto focus:outline-none focus:ring-2 focus:ring-cyan-gray-dark-1 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        RESET
      </button>
    </div>
  );
}

export default Result;
