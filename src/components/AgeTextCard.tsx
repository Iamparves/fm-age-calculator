import React, { useEffect, useRef } from "react";
import { animateNumber } from "../utils/animateNumber";

interface AgeTextCardProps {
  value: number | null;
  label: string;
}

const AgeTextCard: React.FC<AgeTextCardProps> = ({ value, label }) => {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    animateNumber({
      duration: 2000,
      elem: numRef.current as HTMLSpanElement,
      start: 0,
      end: value || 0,
    });
  }, [value]);

  return (
    <h2 className="text-off-black text-[56px] font-extrabold italic leading-none tracking-[-2px] sm:text-[88px] md:text-[98px]">
      <span ref={numRef} className="text-purple">
        {value === null ? "- -" : value}
      </span>{" "}
      {label}
    </h2>
  );
};

export default AgeTextCard;
