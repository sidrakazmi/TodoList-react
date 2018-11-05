import React from 'react';
import App from '../App.js';
import {render} from 'react-testing-library';

describe ('App', () =>{
    it ('should render ', () =>{
        const output = render (<App/>);
        expect (output).toMatchSnapshot();
    })
    debug();
});

