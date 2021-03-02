export interface ICryptoList {
  results: ICryptoItem[];
}

export interface ICryptoItem {
  currency: string;
  id: string;
  status: string;
  price: number;
  symbol: string;
  circulating_supply: string;
  max_supply: number;
  name: string;
  logo_url: string;
  rank: number;
}