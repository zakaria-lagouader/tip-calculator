import React from "react";

interface InputProps {
  label?: string;
  icon?: JSX.Element;
  className?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  min?: number;
}

const Input: React.FC<InputProps> = ({ label, icon, className, error, onChange, value, min }) => {
  return (
    <div className={"flex flex-col " + className}>
      <div className="flex items-center text-sm font-bold mb-2 justify-between">
        <label className="text-cyan-gray-dark-1">{label}</label>
        <label className="text-red">{error}</label>
      </div>
      <div className="relative">
        <input
          type="number"
          onChange={onChange}
          value={value}
          min={min}
          className={"px-3 py-1 w-full bg-cyan-gray-light-2 rounded-md focus:outline-none text-[24px] text-cyan-dark font-bold text-right focus:ring-cyan-strong focus:ring-2 transition-all " + (error && "ring-2 ring-red")}
        />
        <div className="absolute top-1/2 left-[12px] -translate-y-1/2">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Input;
