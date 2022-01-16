import React, { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../AppContext";

interface OptionProps {
  value: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active: boolean;
}

const Option: React.FC<OptionProps> = ({ value, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={
        "rounded-md font-bold p-2 text-center text-xl cursor-pointer transition-all hover:bg-cyan-strong hover:text-cyan-dark " +
        (active ? "bg-cyan-strong text-cyan-dark" : "text-white bg-cyan-dark")
      }
    >
      {value}%
    </div>
  );
};

function Options() {
  const { tip, setTip } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 100) {
      return;
    }
    setInputValue(value);
    setTip(value);
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <Option onClick={() => setTip(5)} value={5} active={tip === 5} />
      <Option onClick={() => setTip(10)} value={10} active={tip === 10} />
      <Option onClick={() => setTip(15)} value={15} active={tip === 15} />
      <Option onClick={() => setTip(25)} value={25} active={tip === 25} />
      <Option onClick={() => setTip(50)} value={50} active={tip === 50} />

      <input
        type="number"
        placeholder="Custom"
        max={100}
        min={0}
        value={inputValue === 0 ? "" : inputValue}
        onChange={handleInputChange}
        className="rounded-md bg-cyan-gray-light-2 font-bold text-cyan-dark p-2 text-center text-xl focus:outline-none focus:ring-cyan-strong focus:ring-2 transition-all"
      />
    </div>
  );
}

export default Options;
