import { useEffect, useState } from "react";

import coinMarket from "./api/coinMarket";
import { Crypto } from "./components/crypto/Crypto";
import { Container } from "semantic-ui-react";
import { Loading } from "./components/loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getCurrencies();
    setInterval(() => getCurrencies(), 10000);
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
    setLoading(false);
    setResults(data);
  };

  return (
    <div>
      {loading ? (
        <Loading text="Loading" />
      ) : (
        <Container>
          <Crypto results={results} />
          <a
            className="ui center aligned grid"
            href="https://nomics.com"
            target="none">
            Crypto Market Cap & Pricing Data Provided By Nomics
          </a>
        </Container>
      )}
    </div>
  );
};

export default App;
