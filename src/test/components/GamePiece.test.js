import React from 'react';
import { shallow } from 'enzyme';
import GamePiece from '../../components/GamePiece';

describe('testing in main component GamePiece', () => {

    test('should be displayed correctly', () => {
        const wrapper = shallow( <GamePiece /> );
        expect( wrapper ).toMatchSnapshot();
    })
      
})