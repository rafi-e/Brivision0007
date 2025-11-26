// components/layout/Header.tsx (MODIFIED)
import React from "react";
import briLogo from "../assets/images/bri.png"

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
        className={`${briBlue} text-white px-4 py-1 flex justify-between items-center text-sm`}
      >
        <div className="flex items-center">
          {/* BRI Logo Placeholder */}
          <img
            width={180}
            src={briLogo} // Ganti dengan path yang benar
            alt="BRI Logo"
          />
        </div>
        <div className="text-center sm:text-right">
          {/* Tampilkan Nama Unit yang Dinamis/Terdekat */}
          <div className="text-xl sm:text-3xl font-extrabold leading-none">
            BRI {nearestUnitName}
          </div>
          {/* Tampilkan Alamat Unit Terdekat atau Info Call Center Default */}
          <div className="mt-1 text-xl tracking-widest">
            Call Center: 1500017 | WA : 0812-12-14017 | Email: callbri@bri.co.id
          </div>
        </div>
      </header>

      {/* Real-time Clock Header */}
      <div className="bg-blue-900 text-white px-4 py-2 flex justify-between items-center text-base font-semibold">
        <div>{dateStr}</div>
        <div>{timeStr}</div>
      </div>
    </>
  );
};
