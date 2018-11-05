import React, { Component } from 'react';
import ListItem from './listItem';

export default class List extends Component {


    render(){
        return (
            <div id="list">
                {(this.props.list).map((item, index)=>
                <ListItem key={index} item={item}/>
                )}
                
            </div>
        )
    }
}