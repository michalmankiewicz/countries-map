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
};

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}
