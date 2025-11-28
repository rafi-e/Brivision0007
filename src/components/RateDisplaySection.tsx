// components/RateDisplaySection.tsx
import React from "react";
import { RateTable } from "./RateTable";
import type { RateSection } from "../data/data"; // Ganti path sesuai struktur Anda
  // Ganti path sesuai struktur Anda

interface RateDisplaySectionProps {
  currentRateSet: RateSection[];
  currentRateSetIndex: number;
}

// Custom utility classes
const briBlue = "bg-[#004d99]";

export const RateDisplaySection: React.FC<RateDisplaySectionProps> = ({
  currentRateSet,
  currentRateSetIndex,
}) => {
  return (
    <>
      {currentRateSet.map((section, index) => (
        <div
          // Key yang berubah akan memaksa transisi/re-render untuk animasi
          key={`${section.title}-${currentRateSetIndex}-${index}`} 
          className="h-full w-full grid transition-opacity duration-1000 ease-in-out " 
        >
          <RateTable section={section} briBlue={briBlue} />
        </div>
      ))}
    </>
  );
};