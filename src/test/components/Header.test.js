import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('testing in component Header', () => {

    test('should be displayed correctly', () => {
        const wrapper = shallow( <Header /> );
        expect( wrapper ).toMatchSnapshot();
    })
      
})