import React, { createContext, useState } from 'react';
import Header from "./Header";
import styled from 'styled-components';
import Wrapper from './Wrapper';
import GameBoard from './GameBoard';

const ScreenStyled = styled.main`
    background: #000;
    padding: 0.5em;
    position: relative;
    height: 500px;
    color:#fff;
  `;

export const ScoreContex = createContext();
export const GameBoardContex = createContext();
export const GameBoardInit = createContext();

const GameScreen = () => {

    const [score, setScore] = useState(0);
    const [gameB, setGameB] = useState(true);
    const [userPlaying, setUserPlaying] = useState(false);

    return (
        <GameBoardInit.Provider value={{
            userPlaying,
            setUserPlaying
        }}>
            <GameBoardContex.Provider value={{
                gameB,
                setGameB
            }}>
                <ScoreContex.Provider value={{
                    score,
                    setScore
                }}>
                    <ScreenStyled>
                        <Wrapper>
                            <Header />
                            <GameBoard />
                        </Wrapper>
                    </ScreenStyled>
                </ScoreContex.Provider>
            </GameBoardContex.Provider>
        </GameBoardInit.Provider>
    );
};

export default GameScreen;
