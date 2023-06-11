export type FetchedCountry = {
  name: {
    common: string;
  };
  population: number;
  capital: string[] | undefined;
  capitalInfo: {
    latlng: [number, number];
  };
  currencies: Currencies | undefined;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  latlng: [number, number];
};

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export type Country = {
  name: string;
  population: number;
  currency: string[];
  imgUrl: string;
  capital: string[];
  coords: {
    lat: number;
    lng: number;
  };
};

export type Filter = 'Country' | 'Capital';
