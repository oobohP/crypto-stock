import React from "react";
import "./Crypto.css";
import NumberFormat from "react-number-format";
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

  return (
    <div className="tableStyles">
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
