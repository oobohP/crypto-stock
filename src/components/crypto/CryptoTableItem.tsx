import React from "react";
import NumberFormat from "react-number-format";
import { Table } from "semantic-ui-react";
import { ICryptoList } from "../../shared/types";

export const CryptoTableItem = (props: ICryptoList) => {
  const renderedProps = props.results.map((result) => {
    return (
      <Table.Row key={result.id}>
        <Table.Cell>{result.rank}</Table.Cell>
        <Table.Cell>
          <img src={result.logo_url} alt={result.name} /> {result.name}{" "}
          <span className="symbolColor">{result.symbol}</span>
        </Table.Cell>
        <Table.Cell>
          <NumberFormat
            value={result.price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
          />
        </Table.Cell>
        <Table.Cell>
          {result.circulating_supply} {result.symbol}
        </Table.Cell>
      </Table.Row>
    );
  });

  return <React.Fragment>{renderedProps}</React.Fragment>;
};
