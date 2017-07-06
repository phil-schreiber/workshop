import React, { Component } from 'react';
import PersonComp from './components/Persons';
import Clock from './components/Clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const Persons = [
        {
            first: 'KArl',
            last: 'Heinz1',
            hasBirthday: false,
            email:'email@email',
            location:'myLocation',
            phone:'12345'
        },
        {
            first: 'KArl',
            last: 'Heinz2',
            hasBirthday: false,
            email:'email@email',
            location:'myLocation',
            phone:'12345'
        },
        {
            first: 'KArl',
            last: 'Heinz3',
            hasBirthday: true,
            email:'email@email',
            location:'myLocation',
            phone:'12345'
        }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          {Persons.map((Person)=><PersonComp
              {...Person}
          />)}

      </div>
    );
  }
}

export default App;
