import AgeTextCard from "./AgeTextCard";

interface AgeResultProps {
  age: Age | null;
}

const AgeResult: React.FC<AgeResultProps> = ({ age }) => {
  return (
    <div className="flex flex-col gap-2">
      <AgeTextCard value={age?.years ?? null} label="years" />
      <AgeTextCard value={age?.months ?? null} label="months" />
      <AgeTextCard value={age?.days ?? null} label="days" />
    </div>
  );
};

export default AgeResult;
