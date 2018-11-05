import React from 'react';
import App from '../App.js';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { toBeVisible, toContainElement } from 'jest-dom';

<<<<<<< HEAD
describe ('App', () =>{
    it ('should render ', () =>{
        const output = render (<App/>);
        expect (output).toMatchSnapshot();
      
    })
   
});
=======

expect.extend({toBeVisible, toContainElement});

describe('App', () => {
    it('should render ', () => {
        const output = render(<App />);
        expect(output).toMatchSnapshot();
    })
>>>>>>> ab8056b9975daea85fd8574155f22bfb7892a17f

    it('should contain header', () => {
        expect(document.querySelector('h1')).toBeVisible();
    })

    it('should contain component for input', () => {
        expect(document.getElementById('input')).toBeVisible();
    })
});