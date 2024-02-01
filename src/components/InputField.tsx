import { twMerge } from "tailwind-merge";

interface InputFieldProps {
  label: string;
  placeholder: string;
  field: InputType;
  onChangeValue: (value: InputType) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  field,
  onChangeValue,
}) => {
  const { value, error } = field;

  return (
    <div className="flex flex-col gap-2">
      <label
        className={twMerge(
          "text-smokey-grey text-sm font-bold uppercase tracking-[3px]",
          error && "text-light-red",
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        min={0}
        value={value || ""}
        className={twMerge(
          "border-light-grey text-off-black placeholder:text-smokey-grey/80 focus:border-purple rounded-lg border px-6 py-3 text-[32px] font-bold outline-none duration-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          error && "border-light-red",
        )}
        onChange={(e) =>
          onChangeValue({ error, value: e.target.valueAsNumber })
        }
      />
      {error && <p className="text-light-red text-sm italic">{error}</p>}
    </div>
  );
};

export default InputField;
