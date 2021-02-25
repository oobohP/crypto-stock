import React, { useEffect, useState } from "react";

import coinMarket from "./api/coinMarket";
import { Crypto } from "./components/Crypto";
import { Container } from "semantic-ui-react";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getCurrencies();
  }, []);

  // getCurrencies gets a list of currencies from the API, max 50 per page
  const getCurrencies = async () => {
    const { data } = await coinMarket.get("/currencies/ticker?per-page=50", {
      params: {
        key: "abc",
        page: 1,
        sort: "rank",
        status: "active",
        interval: "1d",
      },
    });
    setResults(data);
  };

  return (
    <div>
      <Container>
        <Crypto results={results} />
      </Container>
    </div>
  );
};

export default App;
