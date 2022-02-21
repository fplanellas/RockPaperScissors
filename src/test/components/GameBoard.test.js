import React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../../components/GameBoard';
import { GameBoardContex } from '../../components/GameScreen';

describe('testing in component GameBoard', () => {

    const gameB = {
        gameBresponse: true
    }
  
    const wrapper = shallow( 
        <GameBoardContex.Provider value={{
            gameB
        }}>
            <GameBoard />
        </GameBoardContex.Provider>
    );

    test('should be displayed correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
      
})