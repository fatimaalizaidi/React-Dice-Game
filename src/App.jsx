import React, { useState } from "react";
import Startgame from "./assets/components/Startgame";
import  GamePlay  from "./assets/components/GamePlay";
import "./App.css";
const App = () => {
  const[isGameStarted , setIsGameStarted] = useState(false);
const toggledSelection =() => {
  setIsGameStarted((prev) => !prev) 
};
  return (
    isGameStarted ?  <GamePlay/> :  <Startgame toggle={toggledSelection}/> );
    
}

export default App