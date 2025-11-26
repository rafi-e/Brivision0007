// components/CurrencyCard.tsx
import React from "react";

interface CurrencyCardProps {
  currency: string;
  flag: string;
  sell: string;
  buy: string;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currency,
  flag,
  sell,
  buy,
}) => {
  return (
    <div className="p-1 border border-gray-300 shadow-sm rounded-md bg-gray-300">
      <div className="flex px-5 justify-between items-center mb-1">
        {/* Flag Icon */}
        <span className={`${flag} w-8! size-8`} />
        <span className="text-sm font-extrabold text-blue-900">{currency}</span>
      </div>
      <div className="flex px-1.5 justify-between font-semibold text-white mb-0.5 text-xs">
        <span className="bg-orange-500 px-1 py-0.5 rounded-sm">Sell</span>
        <span className="text-orange-700 font-bold">{sell}</span>
      </div>
      <div className="flex px-1.5 justify-between font-semibold text-white mb-0.5 text-xs">
        <span className="bg-blue-500 px-1 py-0.5 rounded-sm">Buy</span>
        <span className="text-blue-700 font-bold">{buy}</span>
      </div>
    </div>
  );
};