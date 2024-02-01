interface CalculateAgeParams {
  day: number;
  month: number;
  year: number;
}

export const calculateAge = ({ day, month, year }: CalculateAgeParams) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const age = {
    years: today.getFullYear() - birthDate.getFullYear(),
    months: today.getMonth() - birthDate.getMonth(),
    days: today.getDate() - birthDate.getDate(),
  };

  if (age.days < 0) {
    age.months--;
    age.days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (age.months < 0) {
    age.years--;
    age.months += 12;
  }

  return age;
};
