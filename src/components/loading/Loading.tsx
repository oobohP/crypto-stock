import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface LoadingProps {
  text: string;
}

export const Loading = ({ text }: LoadingProps) => {
  return (
    <div>
      <Dimmer active inverted>
        <Loader size="massive" inverted>
          <a href="https://nomics.com" target="none">
            Crypto Market Cap & Pricing Data Provided By Nomics
          </a>
        </Loader>
      </Dimmer>
    </div>
  );
};
