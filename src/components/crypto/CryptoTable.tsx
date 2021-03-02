import React from "react";
import { Table } from "semantic-ui-react";
import { ICryptoList } from "../../shared/types";
import { CryptoTableItem } from "./CryptoTableItem";

export const CryptoTable = (props: ICryptoList) => {
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
        <Table.Body>
          <CryptoTableItem results={props.results} />
        </Table.Body>
      </Table>
    </div>
  );
};
