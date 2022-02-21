import React from 'react';
import { shallow } from 'enzyme';
import RockPapersScissors from '../RockPapersScissors';

describe('testing in main component RockPapersScissors', () => {

    test('should be displayed correctly', () => {
        const wrapper = shallow( <RockPapersScissors /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
