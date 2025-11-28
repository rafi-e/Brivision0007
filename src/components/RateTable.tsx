// components/RateTable.tsx
import React from "react";
import type { RateSection } from "../data/data"; // Ganti path sesuai struktur Anda

interface RateTableProps {
  section: RateSection;
  briBlue: string;
}

export const RateTable: React.FC<RateTableProps> = ({ section, briBlue }) => {
  // Tentukan apakah perlu menerapkan tinggi maksimum untuk scrolling
  const shouldApplyMaxHeight = section.data.length > 4;

  return (
    <div className="w-full h-full bg-white border-2 2xl:border-5 border-gray-500 rounded-xl 2xl:rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out">
      <h2
        className={`bg-orange-500 text-white text-xl 2xl:text-3xl font-extrabold p-2 2xl:p-3 text-center tracking-wider`}
      >
        {section.title}
      </h2>
      <div className="text-base">
        {/* Header Row - Selalu Tampilkan */}
        {shouldApplyMaxHeight ? (
          <div></div>
        ) : (
          <div
            className={`grid grid-cols-2 text-white ${briBlue} font-bold sticky top-0 z-10`}
          >
            <div className="px-4 py-[6.7px] 2xl:py-[9px] 2xl:text-3xl text-center tracking-wider">
              Nominal
            </div>
            <div className="px-4 py-[6.7px] 2xl:py-[9px] 2xl:text-3xl text-center tracking-wider">Suku Bunga</div>
          </div>
        )}

        <div>
          {section.data.map((item, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-2 ${
                rowIdx % 2 === 0 ? "bg-blue-50" : "bg-white"
              } ${
                rowIdx < section.data.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="px-4 py-[6.7px] 2xl:py-[9px] 2xl:text-2xl text-center font-medium tracking-wide">
                {item.nominal}
              </div>
              <div
                className={`px-4 py-[6.7px] 2xl:py-[9px] 2xl:text-2xl text-center font-extrabold tracking-wide text-red-600`}
              >
                {item.rate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};