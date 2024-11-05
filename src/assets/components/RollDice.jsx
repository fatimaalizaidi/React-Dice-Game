import React, { useState } from "react";
import styled from "styled-components";



const RollDice = ({currentDice , Newturndice}) => {
   

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            
            <Dicebar>
                <img onClick={Newturndice} src={`/public/Images/dices/dice_${currentDice}.png`} alt="" />
                <h1>Click on dice to roll</h1>
            </Dicebar>
        </div>
      </div>
    </div>
  );
};

export default RollDice;

const Dicebar = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
img{
    
    object-fit: cover;
    
}

h1{
    font-size: 20px;
    margin-top: 20px;
}


`