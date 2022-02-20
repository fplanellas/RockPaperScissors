import React, { useContext, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { ScoreContex } from './GameScreen';
import { GameBoardContex } from './GameScreen';
import { GameBoardInit } from './GameScreen';
import { playerReducer } from './playerReducer';

const ScoreStyled = styled.div`
   text-align: center;
   padding: 5px 0; 
   color: #fff;
   position: absolute;
   left:0;
   width: 100%;
   top: 0;
   small {
       width:100%;
       text-align: center;
       font-size:15px;
   }
   p {
       margin:auto;
       padding:0
       width:100%;
       font-size: 35px;
       font-weight: bold;
       text-align: center;
   }
   form {
       z-index:200;
        width: 100%;      
       margin-right: 50px;
       display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
   }
   input {
    width:300px;
    background: #212121;
    border: 2px solid rgba(255, 255, 255, .29);
    padding:10px;
    color:#bdbdbd;
    font-size: 18px;
    border-radius: 5px;
    }  
    button {
        width:300px;
        border:2px solid grey;
        border-radius: 5px;
        background: #bdbdbd;
        padding:10px;
        color: #000;
        font-weight: bold;
    }

   h3 {
        margin-top: 100px;
        font-size: 18px;
   }
   .container-score-screen {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 15px;
   }
   .score-screen {     
       display: flex;
       flex-direction: column;
        align-items: center;
        border: 2px solid rgba(255, 255, 255, .29);
        border-radius: 10px;
        padding: 0.5em 1em;
        margin: auto;
        margin-top: 60px;

   }
   .save-back {
       position: absolute;
       right: 12px;
       top: 14px;
       cursor: pointer;
   }
` 
    const init = () => {
            return JSON.parse(localStorage.getItem('players')) || [];
    };
  
    const Score = () => {
        
        const { score, setScore } = useContext(ScoreContex);
        const [ players, dispatch ] = useReducer(playerReducer, [], init);
        const [ userNaming, setUserNaming ] = useState(false);
        const { gameB, setGameB } = useContext(GameBoardContex);
        const { userPlaying, setUserPlaying } = useContext(GameBoardInit);

        const [ { description }, handleInputChange, reset ] = useForm({
            description: ''
        });

        useEffect( () => {
            localStorage.setItem('players', JSON.stringify( players ))
        }, [players] ) ;

        const handleOut = (player) => {
            const action = {
                type: 'score',
                payload: player.id,
                score: player.score + score
            };

            dispatch( action );
            setUserNaming(false);
            setGameB(true);
            setUserPlaying(false);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
       
            if ( description.trim().length <= 1 ) {
                return;
            }
    
            const newPlayer = {
                id: description,
                name: description,
                score: 0
            };
    
            const action = {
                type: 'add',
                payload: newPlayer
            };
            
            const adding = action.payload;
            const elementAdded = players.find(element => element.id === action.payload.id);
            setScore(score - score);
            
            setUserNaming(true);
            setGameB(false);  

            if (!elementAdded) {
                dispatch( action );               
                window.pan = adding;                           
            }

            if (elementAdded) {              
                window.pan = elementAdded;
            }
            
            reset();
        }
        
    let painting = window.pan;
  
    return (
        <ScoreStyled> 
            <div>
                {
                  userNaming === true ? (
                    <div className='container-score-screen'> 
                        <div className='save-back'> 
                            <img onClick={ () => handleOut(painting)} src="./assets/logout_white.svg"  alt="" width="24px"/> 
                        </div>                                 
                        {
                            painting && (
                                <div className='score-screen'>
                                    <small>{painting.name}</small>
                                    <small>{painting.score + score}</small>
                                </div>                  
                            )
                        }                                            
                    </div>
                  ) : (
                        <>
                            <h3>Create new payer</h3>
                            <form onSubmit={ handleSubmit }>
                                    <input 
                                        type='text'
                                        name='description'
                                        placeholder='player'
                                        autoComplete='off'
                                        value={ description }
                                        onChange={ handleInputChange }
                                    />
                                    <button>
                                        JOIN
                                    </button>
                            </form>
                        </>
                    
                  )
                }
              </div>  
        </ScoreStyled>
    )
}

export default Score
