import React from 'react';
import App from '../App.js';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { toBeVisible, toContainElement } from 'jest-dom';


expect.extend({toBeVisible, toContainElement});

describe('App', () => {
    it('should render ', () => {
        const output = render(<App />);
        expect(output).toMatchSnapshot();
    })

    it('should contain header', () => {
        expect(document.querySelector('h1')).toBeVisible();
    })

    it('should contain component for input', () => {
        expect(document.getElementById('input')).toBeVisible();
    })
});