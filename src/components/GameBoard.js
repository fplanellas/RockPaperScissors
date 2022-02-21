import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import GamePiece from './GamePiece';
import { ScoreContex } from './GameScreen';
import { GameBoardContex } from './GameScreen';
import { GameBoardInit } from './GameScreen';

const GameBoardStyled = styled.div`
  position: relative;
  top: 6em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  text-align: center;
  .result{
      width: 100%;
  }
  .none {
      display: none;
  }

  button {
      border: 1px solid silver;
      border-radius: 5px;
      background: #fff;
      color: #565656; 
      width: 80%;
      padding: 8px;
      font-weight: bold;
      margin-top: 10px;
      text-transform: uppercase;
  }
`;

const GameBoard = () => {

    const [showResults, setShowResults] = useState(false);
    const { gameB } = useContext(GameBoardContex);
    const { score, setScore } = useContext(ScoreContex);
    const { userPlaying, setUserPlaying } = useContext(GameBoardInit);
    const [choose, setChose] = useState('');
    const [botChoose, setBotChose] = useState('');
    const [results, setResults] = useState('');

    const handlePlayAgain = () => {
        setUserPlaying(false);
        setResults('');
        setShowResults(false);
    };

    const botRandomChoice = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const fortune = (choose, botChoose) => {

        if (choose === botChoose) {
            return "It's a tie";
        }

        if (choose === 'paper') {
            if (botChoose === 'rock') {
                return 'You win';
            }
            if (botChoose === 'scissors') {
                return 'You lose';
            }
        }

        if (choose === 'rock') {
            if (botChoose === 'paper') {
                return 'You lose';
            }
            if (botChoose === 'scissors') {
                return 'You win';
            }
        }

        if (choose === 'scissors') {
            if (botChoose === 'paper') {
                return 'You win';
            }
            if (botChoose === 'rock') {
                return 'You lose';
            }
        }
    };

    const elements = [
        'rock',
        'scissors',
        'paper'
    ];

    const launchBotChoose = () => {
        return new Promise((resolve, reject) => {

            let choose;

            const interval = setInterval(() => {
                choose = elements[botRandomChoice(0, 3)];
                setBotChose(choose);
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                resolve(choose);
                setShowResults(true);
            }, 2000);


        });
    };

    const clicked = async (name) => {
        setShowResults(false);
        setUserPlaying(true);
        setChose(name);
        const bot = await launchBotChoose();
        const results = fortune(name, bot);
        setResults(results);

        if (results === 'You win') {
            setScore(score + 1);
        }
    };

    return (
        <div>
            {
                gameB === false && (
                    <GameBoardStyled userPlaying={userPlaying}>
                        {
                            !userPlaying ? (
                                <>
                                    <GamePiece name="rock" clicked={clicked} />
                                    <GamePiece name="scissors" clicked={clicked} />
                                    <GamePiece name="paper" clicked={clicked} />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <GamePiece name={choose} />
                                        <p>You choose</p>
                                    </div>
                                    <div>
                                        <GamePiece name={botChoose} />
                                        <p>Bot choose</p>
                                    </div>
                                    <div className={`${showResults === false ? 'none' : 'result'}`}>
                                        <h2>{results}</h2>
                                        <button onClick={handlePlayAgain}>
                                            Play again
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </GameBoardStyled>
                )
            }
        </div>
    );
};

export default GameBoard;
