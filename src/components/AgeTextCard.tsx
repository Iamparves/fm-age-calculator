interface AgeTextCardProps {
  value: number | null;
  label: string;
}

const AgeTextCard: React.FC<AgeTextCardProps> = ({ value, label }) => {
  return (
    <h2 className="text-off-black text-[98px] font-extrabold italic leading-none tracking-[-2px]">
      <span className="text-purple">{value === null ? "- -" : value}</span>{" "}
      {label}
    </h2>
  );
};

export default AgeTextCard;
