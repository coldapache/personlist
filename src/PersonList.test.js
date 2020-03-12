import React from 'react';
import { shallow } from 'enzyme'
import PersonList from './Components/PersonList'
import App from './App';


describe('PersonList Component', () => {
    it('expect a list item to be rendered within PersonList', () => {
      const appWrapper = shallow(<PersonList />)
      expect(appWrapper.find('li')).toHaveLength();
    })
  })