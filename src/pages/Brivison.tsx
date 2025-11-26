// Testt.tsx (Komponen Utama)
import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css";

import { useRealTimeClock } from "../hooks/useRealTimeClock"; // Lokasi hook
import { currencyData, rateSets, type RateSection } from "../data/data"; // Lokasi data
import { useNearestBriUnit } from "../hooks/useNearestBriUnit";
import { Header } from "../layout/Header"; // Lokasi komponen Header
import { Footer } from "../layout/Footer"; // Lokasi komponen Footer
import { RateDisplaySection } from "../components/RateDisplaySection"; // Lokasi komponen RateDisplaySection
import { ExchangeRateTicker } from "../components/ExchangeRateTicker"; // Lokasi komponen ExchangeRateTicker
import VideoBri from "../components/VideoBri";

export default function Brivision() {
  const { dateStr, timeStr } = useRealTimeClock();
  const [currentRateSetIndex, setCurrentRateSetIndex] = useState(0);
  const nearestUnitData = useNearestBriUnit();

  // Custom utility classes (lebih baik didefinisikan di satu tempat)
  const briBlue = "bg-[#004d99]";

  // Logic perputaran data setiap 10 detik
  useEffect(() => {
    const totalSets = rateSets.length;
    const intervalId = setInterval(() => {
      setCurrentRateSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
    }, 10000); // 10 detik

    return () => clearInterval(intervalId);
  }, []);

  const currentRateSet: RateSection[] = rateSets[currentRateSetIndex];

  return (
    <div className={`min-h-screen ${briBlue} font-sans overflow-y-auto scrollbar-hide`}>
      <div className="mx-auto shadow-2xl overflow-hidden">
        {/* Header Section */}
        <Header
          dateStr={dateStr}
          timeStr={timeStr}
          briBlue={briBlue}
          nearestUnitName={nearestUnitData.name}
        />

        {/* Main Content Area: Deposit Rates and Advertisement */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 py-2">
          {/* Left Column: Deposit Rates (Span 5 columns on large screens) */}
          <div className="lg:col-span-5 space-y-4">
            <RateDisplaySection
              currentRateSet={currentRateSet}
              currentRateSetIndex={currentRateSetIndex}
            />
          </div>

          {/* Right Column: Advertisement (Span 7 columns on large screens) */}
          <div className="lg:col-span-7 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden relative min-h-[400px]">
            <div className="flex bg-cover bg-center bg-black h-full w-full inset-0">
              <VideoBri />
            </div>
          </div>
        </main>

        {/* Exchange Rate Ticker Section */}
        <ExchangeRateTicker currencyData={currencyData} />

        {/* Footer Section */}
        <Footer briBlue={briBlue} nearestUnitName={nearestUnitData.name} />
      </div>
    </div>
  );
}
