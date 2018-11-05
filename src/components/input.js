import React, { Component } from 'react';
import List from './List';

export default class Input extends Component {
    state = {
        userInput: []
    }


addToList = (event) => {
    let field = document.getElementById("inputField");
    let newList = this.state.userInput;
    newList.push(field.value);
    this.setState({ 
        userInput: newList
    })
    console.log(this.state.userInput);
    event.preventDefault();
}

handleKeyPress = (event) => {
    if (event.keyCode == 13) {
        this.addToList();
    }
}

render(){
    debugger;
    return (
        <div id="input">
           
         <input id="inputField" placeholder="Enter text here" type="text" ></input>
            <button className="btn" onClick={this.addToList}> Add </button>
            <List list={this.state.userInput}/>
        </div>
    )
}
}