import React from "react";
import { Table } from "semantic-ui-react";

interface ICryptoList {
  results: ICryptoItem[];
}

interface ICryptoItem {
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

export const Crypto = (props: ICryptoList) => {
  const renderedProps = props.results.map((result) => {
    return (
      <Table.Row>
        <Table.Cell>{result.rank}</Table.Cell>
        <Table.Cell>
          <img
            style={{
              maxWidth: "40px",
              maxHeight: "40px",
              marginRight: "7px",
              verticalAlign: "middle",
            }}
            src={result.logo_url}
            alt={result.name}
          />{" "}
          {result.name} {result.symbol}
        </Table.Cell>
        <Table.Cell>{result.price}</Table.Cell>
        <Table.Cell>{result.circulating_supply}</Table.Cell>
      </Table.Row>
    );
  });

  // return <div>{renderedProps}</div>;
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Circulating Supply</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{renderedProps}</Table.Body>
      </Table>
    </div>
  );
};
