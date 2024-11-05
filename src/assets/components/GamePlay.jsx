import React from "react";
import styled from "styled-components";
import Numberselector from "./Numberselector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(6);
  const [error, setError] = useState("");
  const[rules , setRules] = useState(false);

  const SeeRules = () => {
    setRules((prev => !prev)) ;
  }

  const diceNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Newturndice = () => {
    if (!selectedNumber) {
      setError("Please select a number!");
      return;
    }
   
    const randomNumber = diceNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const ResetScore = () => {
    setScore(0);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-between">
          <TotalScore score={score}></TotalScore>
          <Numberselector
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          ></Numberselector>
        </div>

        <RollDice
          currentDice={currentDice}
          Newturndice={Newturndice}
        ></RollDice>

        <Btns>
          <OutlineButton onClick={ResetScore}>Reset Score</OutlineButton>
          <Button onClick={()=> setRules((prev) => !prev)}> { rules ? "Hide" : "Show" } Rules</Button>
        </Btns>
      {rules && <ShowRules/>}
      </div>
    </div>
  );
};

export default GamePlay;


const Btns = styled.div`
display: flex;
gap:20px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;

`;