import React, { useEffect, useState } from "react";
import coinMarket from "../api/coinMarket";

interface CryptoTicker {
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

export const Crypto: React.FC = () => {
  const [results, setResults] = useState<CryptoTicker[] | undefined>();

  useEffect(() => {
    const getCurrencies = async () => {
      const { data } = await coinMarket.get("/currencies/ticker?per-page=50", {
        params: {
          key: "to be replaced with a backend server",
          page: 1,
          sort: "rank",
          status: "active",
          interval: "1d",
        },
      });
      console.log(data);
      setResults(data);
    };

    // invoke helper function
    getCurrencies();
  }, []);

  const renderedResults = results?.map((result) => {
    return (
      <div>
        {result.name} : {result.price}
      </div>
    );
  });

  return <div>{renderedResults}</div>;
};
