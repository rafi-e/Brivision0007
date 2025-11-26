// hooks/useNearestBriUnit.ts
import { useState, useEffect } from "react";
import {
  briLocations,
  type BriUnit,
  USER_LOCATION_SIMULATION,
  MAX_RADIUS_KM,
} from "../data/briLocations";

interface LocationData {
  name: string;
  isFound: boolean;
}

// Fungsi Haversine untuk menghitung jarak antara dua koordinat (dalam km)
const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Radius bumi dalam km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const useNearestBriUnit = (): LocationData => {
  const [location, setLocation] = useState<LocationData>({
    name: "...",
    isFound: false,
  });

  useEffect(() => {
    // --- Bagian 1: Mendapatkan Lokasi Pengguna ---
    const getUserLocation = () => {
      if (navigator.geolocation) {
        // Menggunakan lokasi nyata browser
        navigator.geolocation.getCurrentPosition(
          (position) => {
            findNearestUnit(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          // Jika gagal (misal, user menolak atau timeout)
          (error) => {
            console.error("Geolocation Error:", error.message);
            // Fallback ke lokasi simulasi jika gagal mendapatkan lokasi nyata
            findNearestUnit(
              USER_LOCATION_SIMULATION.latitude,
              USER_LOCATION_SIMULATION.longitude
            );
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        console.warn("Geolocation tidak didukung browser.");
        // Fallback ke lokasi simulasi
        findNearestUnit(
          USER_LOCATION_SIMULATION.latitude,
          USER_LOCATION_SIMULATION.longitude
        );
      }
    };

    // --- Bagian 2: Mencari Unit Terdekat ---
    const findNearestUnit = (userLat: number, userLon: number) => {
      let closestUnit: BriUnit | null = null;
      let shortestDistance = Infinity;

      briLocations.forEach((unit) => {
        const distance = haversineDistance(
          userLat,
          userLon,
          unit.latitude,
          unit.longitude
        );

        // Cek jika jarak kurang dari radius maksimum (1 km)
        if (distance <= MAX_RADIUS_KM && distance < shortestDistance) {
          shortestDistance = distance;
          closestUnit = unit;
        }
      });

      if (closestUnit) {
        setLocation({
          name: `${closestUnit.name.toUpperCase()}`,
          isFound: true,
        });
      } else {
        // Default jika tidak ada yang ditemukan dalam radius 1km
        setLocation({
          name: "BRI", // Default Hardcode
          isFound: false,
        });
      }
    };

    getUserLocation();
  }, []);

  return location;
};
