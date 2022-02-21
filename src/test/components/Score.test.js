import React from 'react';
import { shallow } from 'enzyme';
import Score from '../../components/Score';
import { ScoreContex } from '../../components/GameScreen';

describe('testing in component Score', () => {

    const score = {
        gamescore: 5
    }
  
    const wrapper = shallow( 
        <ScoreContex.Provider value={{
            score
        }}>
            <Score />
        </ScoreContex.Provider>
    );

    test('should be displayed correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
      
})