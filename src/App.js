import React from 'react';
import './App.css';
import PersonList from './Components/PersonList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      people: [{
        firstName: "Bob",
        lastName: "Vance, vance refrigeration"
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    )
  }


}  

export default App;
