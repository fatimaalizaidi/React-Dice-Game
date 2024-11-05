import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Startgame = ({toggle}) => {
  return (
    <div className="container " >
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-6">
          <Logo>
            <img
              src="https://thumbs.dreamstime.com/b/pn-92kcube-game-14768374.jpg"
              alt=""
            />
          </Logo>
        </div>
        <div className="col-lg-6 d-flex gap-2 align-items-center justify-content-center flex-column align-items-center">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Game</Button>
        </div>
      </div>
    </div>
  );
};

export default Startgame;




const Logo = styled.div`
height:560px;
margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

