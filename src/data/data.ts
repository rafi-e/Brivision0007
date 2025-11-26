// data.ts

interface CurrencyRate {
  code: string;
  flag: string;
  sell: string;
  buy: string;
}

export const currencyData: CurrencyRate[] = [
  { code: "USD", flag: "fi fi-us", sell: "16.461,00", buy: "16.421,00" },
  { code: "AUD", flag: "fi fi-au", sell: "10.243,74", buy: "10.179,38" },
  { code: "EUR", flag: "fi fi-eu", sell: "17.289,40", buy: "17.199,64" },
  { code: "JPY", flag: "fi fi-jp", sell: "110,80", buy: "110,16" },
  { code: "SAR", flag: "fi fi-sa", sell: "4.406,59", buy: "4.366,02" },
  { code: "SGD", flag: "fi fi-sg", sell: "12.253,50", buy: "12.189,89" },
  { code: "CNY", flag: "fi fi-cn", sell: "2.264,45", buy: "2.245,35" },
  { code: "GBP", flag: "fi fi-gb", sell: "20.940,10", buy: "20.816,90" },
  { code: "HKD", flag: "fi fi-hk", sell: "2.118,64", buy: "2.110,21" },
  { code: "MYR", flag: "fi fi-my", sell: "3.700,10", buy: "3.669,32" },
];

interface RateItem {
  nominal: string;
  rate: string;
}

interface RateSection {
  title: string;
  data: RateItem[];
}

// Data Suku Bunga Set 1
const simpedesRates: RateItem[] = [
  { nominal: ">= 1 JT s.d 50 JT", rate: "0,00 %" },
  { nominal: ">= 50 JT s.d < 100 JT", rate: "0,10 %" },
  { nominal: ">= 100 JT s.d < 1 M", rate: "0,60 %" },
  { nominal: ">= 1 M", rate: "0,60 %" },
];

const britamaRates: RateItem[] = [
  { nominal: ">= 1 JT s.d 50 JT", rate: "0,00 %" },
  { nominal: ">= 50 JT s.d < 100 JT", rate: "0,10 %" },
  { nominal: ">= 100 JT s.d < 1 M", rate: "0,60 %" },
  { nominal: ">= 1 M", rate: "0,60 %" },
];

// Data Suku Bunga Set 2
const junioRates: RateItem[] = [
  { nominal: "< 50 JT", rate: "0,00 %" },
  { nominal: ">= 50 JT s.d < 500 JT", rate: "0,10 %" },
  { nominal: ">= 500 JT s.d < 1 M", rate: "0,60 %" },
  { nominal: ">= 1M", rate: "0,60 %" },
];

const britamaBisnisRates: RateItem[] = [
  { nominal: "> 5 JT s.d 50 JT", rate: "0,60 %" },
  { nominal: "> 50 JT s.d 100 JT", rate: "0,75 %" },
  { nominal: "> 100 JT s.d 1 M", rate: "1,00 %" },
  { nominal: "> 1 M", rate: "2,00 %" },
];

// Data Suku Bunga Set 3
const giroRates: RateItem[] = [
  { nominal: "> 10 JT s.d 100 JT", rate: "0,25 %" },
  { nominal: "> 20 JT s.d 500 JT", rate: "0,50 %" },
  { nominal: "> 500 JTd 1 M", rate: "0,75 %" },
  { nominal: "> 1 M", rate: "1,25 %" },
];

const depositoRates: RateItem[] = [
  { nominal: "1 BULAN", rate: "3,00 %" },
  { nominal: "3 BULAN", rate: "3,00 %" },
  { nominal: "6 BULAN", rate: "2,75 %" },
  { nominal: "12 BULAN", rate: "2,50 %" },
  { nominal: "24 BULAN", rate: "2,50 %" },
];

export const rateSets: RateSection[][] = [
  [
    { title: "SIMPEDES", data: simpedesRates },
    { title: "BRITAMA", data: britamaRates },
  ],
  [
    { title: "BRITAMA BISNIS", data: britamaBisnisRates },
    { title: "JUNIO", data: junioRates },
  ],
  [
    { title: "GIRO SWASTA", data: giroRates },
    { title: "DEPOSITO", data: depositoRates },
  ],
];

export type { RateItem, RateSection, CurrencyRate };
