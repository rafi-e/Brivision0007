// hooks/useNearestBriUnit.ts
import { useState, useEffect } from "react";
import {
  briLocations,
  USER_LOCATION_SIMULATION,
  MAX_RADIUS_KM,
} from "../data/briLocations";

export interface BriUnit {
  name: string;
  type: string;
  latitude: number;
  longitude: number;
}

interface LocationData {
  name: string;
  isFound: boolean;
}

// Hitung jarak antara dua titik menggunakan rumus Haversine (dalam km)
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
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const useNearestBriUnit = (): LocationData => {
  const [location, setLocation] = useState<LocationData>({
    name: "...",
    isFound: false,
  });

  useEffect(() => {
    // Coba dapatkan lokasi pengguna, fallback ke simulasi jika gagal
    const getLocation = () => {
      if (!navigator.geolocation) {
        console.warn("Geolocation tidak didukung.");
        findNearest(
          USER_LOCATION_SIMULATION.latitude,
          USER_LOCATION_SIMULATION.longitude
        );
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => findNearest(pos.coords.latitude, pos.coords.longitude),
        (err) => {
          console.error("Geolocation error:", err.message);
          findNearest(
            USER_LOCATION_SIMULATION.latitude,
            USER_LOCATION_SIMULATION.longitude
          );
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    };

    // Cari unit BRI terdekat dalam radius 1 km
    const findNearest = (userLat: number, userLon: number) => {
      let closest: BriUnit | null = null;
      let minDistance = Infinity;

      briLocations.forEach((unit) => {
        const dist = haversineDistance(
          userLat,
          userLon,
          unit.latitude,
          unit.longitude
        );
        if (dist <= MAX_RADIUS_KM && dist < minDistance) {
          minDistance = dist;
          closest = unit;
        }
      });

      if (closest) {
        const { name } = closest; // Ambil nama langsung dari unit terdekat
        setLocation({ name, isFound: true });
      } else {
        setLocation({ name: "BRI", isFound: false });
      }
    };

    getLocation();
  }, []);

  return location;
};
