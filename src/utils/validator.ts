interface DayValidatorParams {
  day: number | null;
  month: number | null;
  year: number | null;
  errors: ErrorType;
  setErrors: (errors: ErrorType) => void;
}

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const dateValidator = ({
  day,
  month,
  year,
  errors,
  setErrors,
}: DayValidatorParams) => {
  const newErrors: ErrorType = { ...errors };

  if (day === null) {
    newErrors.day = "Day is required";
  } else if (day < 1 || day > 31) {
    newErrors.day = "Must be a valid day";
  } else if (month && year && day > getDaysInMonth(month, year)) {
    newErrors.day = "Must be a valid date";
  } else {
    delete newErrors.day;
  }

  if (month === null) {
    newErrors.month = "Month is required";
  } else if (month < 1 || month > 12) {
    newErrors.month = "Must be a valid month";
  } else {
    delete newErrors.month;
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  if (year === null) {
    newErrors.year = "Year is required";
  } else if (
    year > currentYear ||
    (year === currentYear &&
      month &&
      (month > currentMonth ||
        (month === currentMonth && day && day > currentDay)))
  ) {
    newErrors.year = "Must be in the past";
  } else {
    delete newErrors.year;
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
