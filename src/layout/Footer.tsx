// components/layout/Footer.tsx
import React from "react";
import Marquee from "react-fast-marquee";

interface FooterProps {
  briBlue: string;
  nearestUnitName: string;
}

export const Footer: React.FC<FooterProps> = ({ briBlue, nearestUnitName, }) => {
  return (
    <footer
      className={`${briBlue} text-white py-1 px-2 text-center text-sm font-semibold`}
    >
      <Marquee gradient={false} speed={50}>
        <div className="mx-8 whitespace-nowrap text-2xl">
          SELAMAT DATANG DI BRI {nearestUnitName}, MELAYANI DENGAN SETULUS HATI
        </div>
      </Marquee>
    </footer>
  );
};