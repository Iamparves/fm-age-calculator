import { useState } from "react";
import "./App.css";
import AgeResult from "./components/AgeResult";
import DateOfBirthForm from "./components/DateOfBirthForm";

const App = () => {
  const [calculatedAge, setCalculatedAge] = useState<Age | null>(null);

  return (
    <div className="bg-off-white flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-[840px] rounded-[20px] rounded-br-[100px] bg-white px-6 py-12 sm:rounded-br-[180px] sm:p-[60px]">
        <DateOfBirthForm setCalculatedAge={setCalculatedAge} />
        <AgeResult age={calculatedAge} />
      </div>
    </div>
  );
};

export default App;
