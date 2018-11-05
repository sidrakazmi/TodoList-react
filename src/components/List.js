import React, { Component } from 'react';
import ListItem from './listItem';

export default class List extends Component {


    render(){
        return (
            <div>
                {(this.props.list).map((item)=>
                <ListItem item={item}/>
                )}
                
            </div>
        )
    }
}