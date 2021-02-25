import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

interface LoadingProps {
  text: string;
}

export const Loading = (text: LoadingProps) => {
  return (
    <div>
      <Dimmer active inverted>
        <Loader size="massive" inverted>
          Loading
        </Loader>
      </Dimmer>
    </div>
  );
};
