import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('testing in component Wrapper', () => {

    test('should be displayed correctly', () => {
        const wrapper = shallow( <Wrapper /> );
        expect( wrapper ).toMatchSnapshot();
    })
      
})