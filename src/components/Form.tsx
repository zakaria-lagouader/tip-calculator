import { ChangeEvent, useContext } from "react";
import { AppContext } from "../AppContext";
import { DollarIcon, UserIcon } from "./icons";
import Input from "./Input";
import Options from "./Options";

function Form() {
  const { bill, setBill, numberOfPeople, setNumberOfPeople } =
    useContext(AppContext);

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  const handleNumberOfPeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(Number(e.target.value));
  };

  return (
    <div className="py-4 px-6">
      <Input
        label="Bill"
        icon={<DollarIcon />}
        className="mb-8"
        onChange={handleBillChange}
        value={bill}
        min={0}
      />

      <div className="flex flex-col mb-8">
        <label className="text-sm text-cyan-gray-dark-1 font-bold mb-2">
          Select Tip %
        </label>
        <Options />
      </div>

      <Input
        label="Number of People"
        icon={<UserIcon />}
        onChange={handleNumberOfPeopleChange}
        value={numberOfPeople}
        min={1}
      />
    </div>
  );
}

export default Form;
