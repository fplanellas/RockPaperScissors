import React from 'react';
import { shallow } from 'enzyme';
import GameScreen from '../../components/GameScreen';

describe('testing in component GameScreen', () => {

    test('should be displayed correctly', () => {
        const wrapper = shallow( <GameScreen /> );
        expect( wrapper ).toMatchSnapshot();
    })
      
})