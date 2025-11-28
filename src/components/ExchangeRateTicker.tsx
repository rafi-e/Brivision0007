// components/ExchangeRateTicker.tsx
import React from "react";
import { CurrencyCard } from "./CurrencyCard"; 
import type { CurrencyRate } from "../data/data"; // Ganti path sesuai struktur Anda

interface ExchangeRateTickerProps {
  currencyData: CurrencyRate[];
}

export const ExchangeRateTicker: React.FC<ExchangeRateTickerProps> = ({
  currencyData,
}) => {
  return (
    <section className={`px-4 py-2 2xl:py-3 bg-blue-900 border-t border-gray-300`}>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2 2xl:gap-3 text-xs text-center font-bold">
        {currencyData.map((data) => (
          <CurrencyCard
            key={data.code}
            currency={data.code}
            flag={data.flag}
            sell={data.sell}
            buy={data.buy}
          />
        ))}
      </div>
    </section>
  );
};