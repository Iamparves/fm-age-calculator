import { useState } from "react";
import { calculateAge } from "../utils/calculateAge";
import { dateValidator } from "../utils/validator";
import InputField from "./InputField";

interface DateOfBirthFormProps {
  setCalculatedAge: (age: Age) => void;
}

const DateOfBirthForm: React.FC<DateOfBirthFormProps> = ({
  setCalculatedAge,
}) => {
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [errors, setErrors] = useState<ErrorType>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = dateValidator({ day, month, year, errors, setErrors });
    if (!isValid) return;

    const age = calculateAge({ day: day!, month: month!, year: year! });

    setCalculatedAge(age);
  };

  return (
    <div className="border-off-white relative mb-[60px] border-b-2 pb-12">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[repeat(3,minmax(80px,160px))] gap-9"
      >
        <InputField
          label="day"
          placeholder="DD"
          value={day}
          setValue={setDay}
          errors={errors}
        />
        <InputField
          label="month"
          placeholder="MM"
          value={month}
          setValue={setMonth}
          errors={errors}
        />
        <InputField
          label="year"
          placeholder="YYYY"
          value={year}
          setValue={setYear}
          errors={errors}
        />
        <button className="bg-purple absolute bottom-0 right-0 flex size-24 translate-y-1/2 items-center justify-center rounded-full">
          <img src="/icon-arrow.svg" alt="icon-arrow" />
        </button>
      </form>
    </div>
  );
};

export default DateOfBirthForm;
