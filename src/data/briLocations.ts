// data/briLocations.ts

export interface BriUnit {
  name: string;
  type: string;
  latitude: number;
  longitude: number;
}

// Data Unit Kerja BRI di Banyuwangi dengan Koordinat (Simulasi/Perkiraan)
export const briLocations: BriUnit[] = [
  {
    type: "KCU",
    name: "KANTOR CABANG BANYUWANGI",
    latitude: -8.2186,
    longitude: 114.3697,
  },
  {
    type: "KCP",
    name: "KCP MUNCAR",
    latitude: -8.4366583800914,
    longitude: 114.33299377416864,
  },
  {
    type: "KCP",
    name: "KCP ROGOJAMPI",
    latitude: -8.308476891694047,
    longitude: 114.29292429240824,
  },
  {
    type: "Unit",
    name: "Unit Blambangan",
    latitude: -8.204166492450925,
    longitude: 114.37384389578486,
  },
  {
    type: "Unit",
    name: "Unit Blimbingsari",
    latitude: -8.316132990501917,
    longitude: 114.30625468212321,
  },
  {
    type: "Unit",
    name: "Unit Bajulmati",
    latitude: -7.943927247989562,
    longitude: 114.39423071759786,
  },
  {
    type: "Unit",
    name: "Unit Gladag",
    latitude: -8.321049580958087,
    longitude: 114.28420654070301,
  },
  {
    type: "Unit",
    name: "Unit Glagah",
    latitude: -8.218813872586182,
    longitude: 114.3091113492047,
  },
  {
    type: "Unit",
    name: "Unit Glagah Agung",
    latitude: -8.511884069616602,
    longitude: 114.25623811146092,
  },
  {
    type: "Unit",
    name: "Unit Kabat",
    latitude: -8.267848125078986,
    longitude: 114.32473196589545,
  },
  {
    type: "Unit",
    name: "Unit Kalipuro",
    latitude: -8.178581520617133,
    longitude: 114.35740040306355,
  },
  {
    type: "Unit",
    name: "Unit Ketapang",
    latitude: -8.137946896414233,
    longitude: 114.39830187853696,
  },
  {
    type: "Unit",
    name: "Unit Licin",
    latitude: -8.19268864950133,
    longitude: 114.26609800939353,
  },
  {
    type: "Unit",
    name: "Unit Pasar Kota",
    latitude: -8.21497188319515,
    longitude: 114.3542699533655,
  },
  {
    type: "Unit",
    name: "Unit Pesanggaran",
    latitude: -8.561285767498639,
    longitude: 114.10058978219196,
  },
  {
    type: "Unit",
    name: "Unit Purwoharjo",
    latitude: -8.473374161277318,
    longitude: 114.22568500547811,
  },
  {
    type: "Unit",
    name: "Unit Rogojampi",
    latitude: -8.308262363113982,
    longitude: 114.29353761401069,
  },
  {
    type: "Unit",
    name: "Unit Sambirejo",
    latitude: -7.370247554894897,
    longitude: 111.18406990891584,
  },
  {
    type: "Unit",
    name: "Unit Silir Agung",
    latitude: -8.555868326441955,
    longitude: 114.10936799825035,
  },
  {
    type: "Unit",
    name: "Unit Songgon",
    latitude: -8.23280909154042,
    longitude: 114.20080369305644,
  },
  {
    type: "Unit",
    name: "Unit Sumber Beras",
    latitude: -8.46570552500744,
    longitude: 114.31494813319215,
  },
  {
    type: "Unit",
    name: "Unit Sumbersari",
    latitude: -8.36915066147306,
    longitude: 114.17344659298627,
  },
  {
    type: "Unit",
    name: "Unit Tegaldlimo",
    latitude: -8.512765304602329,
    longitude: 114.28405289127909,
  },
  {
    type: "Unit",
    name: "Unit Tembokrejo",
    latitude: -8.434914357053012,
    longitude: 114.32068137041567,
  },
  {
    type: "Unit",
    name: "Unit Kedunggebang",
    latitude: -8.497283525605948,
    longitude: 114.31405468132465,
  },
  {
    type: "Unit",
    name: "Unit Kedungwungu",
    latitude: -8.549556651029905,
    longitude: 114.3291868043467,
  },
  {
    type: "Unit",
    name: "Unit Sukonatar",
    latitude: -8.400271928359755,
    longitude: 114.26640319510223,
  },
  {
    type: "Unit",
    name: "Unit Tawang Alun",
    latitude: -8.229249060311922,
    longitude: 114.36470532153783,
  },
  {
    type: "Unit",
    name: "Unit Kebondalem",
    latitude: -8.484987266279454,
    longitude: 114.1320511374311,  // Corrected from 14.132... (likely a typo)
  },
  {
    type: "Unit",
    name: "Unit Sumbersewu",
    latitude: -8.405841148807967,
    longitude: 114.30552001229334,
  },
  {
    type: "Unit",
    name: "Unit Ngerambe",
    latitude: -7.512802651675682,
    longitude: 111.20254577945455,
  },
  {
    type: "KK Puspa",
    name: "KK Puspa",
    latitude: -8.327565337879719,
    longitude: 114.10545358899773,
  },
  // ... Tambahkan unit lain sesuai kebutuhan
];

// Lokasi Pengguna Simulasi (Misalnya, dekat Unit Glagah)
export const USER_LOCATION_SIMULATION = {
  latitude: -8.1895,
  longitude: 114.355,
};

// Batasan Radius (1 km)
export const MAX_RADIUS_KM = 1.0;