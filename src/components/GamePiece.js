import React from 'react';
import styled from 'styled-components';

const GamePieceStyled = styled.div`
    width: 100px;
    height: 100px;
    border: 5px solid #9b9b9b;
    border-radius: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
    background: silver;
    cursor: pointer;
`

const GamePiece = ({ name = '', clicked }) => {
 
    const handleClick = () => {
        if (clicked) {
            clicked(name);
        };      
    };

  return (
    <GamePieceStyled onClick={ handleClick }>
      <img src={`./assets/${name}.png`} alt="" width="80px"/>
    </GamePieceStyled>
  )
}

export default GamePiece
