import React, { Component } from 'react';
import Input from './components/input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>This is a todo list </h1>
       <Input/>
      </div>
    );
  }
}

export default App;