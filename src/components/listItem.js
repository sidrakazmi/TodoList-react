import React, { Component } from 'react';

export default class ListItem extends Component {

    render(){
        return (
                <p>{this.props.item}</p>
        )}
    }