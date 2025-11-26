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
    <div className="max-h-72 border border-gray-300 rounded-xl overflow-hidden shadow-xl transition-all duration-1000 ease-in-out">
      <h2
        className={`bg-orange-500 text-white text-xl font-extrabold p-2 text-center`}
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
            <div className="px-4 py-1.5 text-center border-r border-white">
              Nominal
            </div>
            <div className="px-4 py-1.5 text-center">Suku Bunga</div>
          </div>
        )}

        <div>
          {section.data.map((item, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-2 ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-blue-50"
              } ${
                rowIdx < section.data.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="px-4 py-1.5 text-center font-medium tracking-wide">
                {item.nominal}
              </div>
              <div
                className={`px-4 py-1.5 text-center font-extrabold tracking-wide text-red-600`}
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
