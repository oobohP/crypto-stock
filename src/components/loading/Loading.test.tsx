import { render } from "@testing-library/react";
import { Loading } from "./Loading";

test("Render Loading Correctly", () => {
  const { getByText } = render(<Loading text="Loading" />);

  getByText("Crypto Market Cap & Pricing Data Provided By Nomics");
});
