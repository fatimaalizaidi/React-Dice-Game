import React, { useState } from "react";
import styled from "styled-components";

const Numberselector = ({ setError , error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const userTurn = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Selectionbox>
      <p className="errormsg">{error}</p>
      <div className="d-flex align-items-center gap-3">
        {arrNumber.map((value, i) => (
          <Box
            isMatching={value === selectedNumber}
            onClick={() => userTurn(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Selectionbox>
  );
};

export default Numberselector;

const Box = styled.div`
  border: solid 1px black;
  color: black;
  padding: 15px 25px;
  font-size: 20px;
  background-color: ${(props) => (props.isMatching ? "black" : "white")};
  color: ${(props) => (props.isMatching ? "white" : "black")};
`;
const Selectionbox = styled.div`
  margin-top: 10px;
  p {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }
  .errormsg {
    color: red;
  }
`;
