import { twMerge } from "tailwind-merge";

interface InputFieldProps {
  label: LabelType;
  placeholder: string;
  value: number | null;
  setValue: (value: number | null) => void;
  errors: ErrorType;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  setValue,
  errors,
}) => {
  const error: string = errors[label] || "";

  return (
    <div className="flex flex-col gap-2">
      <label
        className={twMerge(
          "text-smokey-grey text-[12px] font-bold uppercase tracking-[3px] duration-300 sm:text-sm",
          error && "text-light-red",
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        value={value || ""}
        className={twMerge(
          "border-light-grey text-off-black placeholder:text-smokey-grey/80 focus:border-purple rounded-lg border px-4 py-3 text-xl font-bold outline-none duration-300 [appearance:textfield] sm:px-6 sm:text-[32px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          error && "border-light-red",
        )}
        onChange={(e) =>
          setValue(e.target.value ? Number(e.target.value) : null)
        }
      />
      <div
        className={twMerge(
          "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300",
          error && "grid-rows-[1fr]",
        )}
      >
        <p className="text-light-red overflow-hidden text-[12px] italic sm:text-sm">
          {error || <span className="text-transparent">.</span>}
        </p>
      </div>
    </div>
  );
};

export default InputField;
