import React from "react";
import styled from "styled-components";


const TotalScore = ({score}) => {
  return (
    <Score className="d-flex mt-3 align-items-center flex-column">
      <h1>{score}</h1>
      <p className="d-flex justify-content-center">Total Score</p>
    </Score>
  );
};

export default TotalScore;




const Score = styled.div`

width:50px;
h1{
    
    color:black;
    font-size: 70px;
}
 p{
  font-size:20px;
  white-space: nowrap;
 }

`;