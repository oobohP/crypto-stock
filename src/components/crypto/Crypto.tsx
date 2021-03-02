import React from "react";
import "./Crypto.css";
import { CryptoTable } from "./CryptoTable";
import { ICryptoList } from "../../shared/types";

export const Crypto = (props: ICryptoList) => {
  return (
    <div>
      <CryptoTable results={props.results} />
    </div>
  );
};
