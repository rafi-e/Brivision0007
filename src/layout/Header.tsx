// components/layout/Header.tsx (MODIFIED)
import React from "react";
import briLogo from "../assets/images/bri.png";

interface HeaderProps {
  dateStr: string;
  timeStr: string;
  briBlue: string;
  // Tambahkan prop baru untuk nama unit dan alamat
  nearestUnitName: string;
}

export const Header: React.FC<HeaderProps> = ({
  dateStr,
  timeStr,
  briBlue,
  nearestUnitName,
}) => {
  return (
    <>
      {/* Top Header Section */}
      <header
        className={`${briBlue} mt-5 px-4 2xl:p-5 2xl:pb-1 py-2 flex justify-between items-center text-sm text-white`}
      >
        <div className="flex items-center">
          {/* BRI Logo Placeholder */}
          <img
            className="h-14 2xl:h-24 w-auto"
            src={briLogo} // Ganti dengan path yang benar
            alt="BRI Logo"
          />
        </div>
        <div className="text-center sm:text-right 2xl:space-y-3">
          {/* Tampilkan Nama Unit yang Dinamis/Terdekat */}
          <div className="text-xl sm:text-3xl 2xl:text-5xl font-extrabold tracking-wider leading-none">
            BRI {nearestUnitName.toUpperCase()}
          </div>
          {/* Tampilkan Alamat Unit Terdekat atau Info Call Center Default */}
          <div className="mt-1 text-xl 2xl:text-3xl tracking-widest">
            Call Center: 1500017 | WA : 0812-12-14017 | Email: callbri@bri.co.id
          </div>
        </div>
      </header>

      {/* Real-time Clock Header */}
      <div className="flex justify-center items-center bg-blue-900 text-white px-6 2xl:px-12 py-2 text-base 2xl:text-3xl font-semibold">
        <div className="basis-1/14 2xl:basis-1/12 2xl:text-3xl font-extrabold text-orange-400 tracking-wider">
          {timeStr}
        </div>
        <div className="basis-13/14 2xl:basis-11/12 2xl:text-2xl">{dateStr}</div>
      </div>
    </>
  );
};
