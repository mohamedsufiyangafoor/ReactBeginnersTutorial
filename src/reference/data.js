import React, { useContext } from "react";
import { Con } from "../App";

function Data({ firstname, lastname }) {
  const mes = useContext(Con);
  return (
    <>
      {firstname && lastname ? (
        <>
          <h2>First Name: {firstname}</h2>
          <h2>Last Name: {lastname}</h2>
          <p>{mes}</p>
        </>
      ) : (
        <>
          <h2>First Name is not passed</h2>
          <h2>Last Name is not passed</h2>
        </>
      )}
    </>
  );
}

export default Data;
