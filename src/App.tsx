import React from "react";
import { Crypto } from "./components/Crypto";

import { Container } from "semantic-ui-react";

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Crypto />
      </Container>
    </div>
  );
};

export default App;
