import React from 'react';
import styled from 'styled-components';

const ShowRules = () => {
  return (
    <Rulesbox>
        <div className='ruling'>
        <h4>How to play Dice Game?</h4>
        <p>Select any number</p>
        <p>Click on dice to roll</p>
        <p>If selected number and dice number matches you get the number added to your score, otherwise 2 is subtracted.</p>
        </div>
       
    </Rulesbox>
  );
}

export default ShowRules;

const Rulesbox = styled.div`

display: flex;
justify-content: center;
margin: 30px 0px;
align-items: center;

.ruling{
    background-color: #f1c9d0f9;
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 20px 0px;
}


p{
    line-height: 1.5;
    margin: 4px;
    
}


`
;