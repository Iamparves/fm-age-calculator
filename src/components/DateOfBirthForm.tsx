import { useState } from "react";
import InputField from "./InputField";

interface DateOfBirthFormProps {
  setCalculatedAge: (age: Age) => void;
}

const DateOfBirthForm: React.FC<DateOfBirthFormProps> = () => {
  const [day, setDay] = useState<InputType>({
    value: null,
    error: "",
  });
  const [month, setMonth] = useState<InputType>({
    value: null,
    error: "",
  });
  const [year, setYear] = useState<InputType>({
    value: null,
    error: "",
  });

  return (
    <div className="border-off-white relative mb-[60px] border-b-2 pb-12">
      <form className="grid grid-cols-[repeat(3,minmax(80px,160px))] gap-9">
        <InputField
          label="day"
          placeholder="DD"
          field={day}
          onChangeValue={setDay}
        />
        <InputField
          label="month"
          placeholder="MM"
          field={month}
          onChangeValue={setMonth}
        />
        <InputField
          label="year"
          placeholder="YYYY"
          field={year}
          onChangeValue={setYear}
        />
        <button className="bg-purple absolute bottom-0 right-0 flex size-24 translate-y-1/2 items-center justify-center rounded-full">
          <img src="/icon-arrow.svg" alt="icon-arrow" />
        </button>
      </form>
    </div>
  );
};

export default DateOfBirthForm;
