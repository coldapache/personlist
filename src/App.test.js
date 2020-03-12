import React from 'react';
import { shallow } from 'enzyme'
import PersonList from './Components/PersonList'
import App from './App';

const mockPeople = [
      {
        firstName: "Bob",
        lastName: "Vance, vance refrigeration"
      }
];

describe('App Component', () => {
  it('renders without crashing', () => {
    // Creating an instance of our component to test
    const appWrapper = shallow(<App />)


  })
  it('app renders a component called PersonList', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find(PersonList)).toHaveLength(1)
  })
  it('expects people to be in the state', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.state('people')).toHaveLength(1)
  })
  
})

