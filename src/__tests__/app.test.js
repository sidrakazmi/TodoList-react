import React from 'react';
import App from '../App.js';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { toBeVisible } from 'jest-dom';
import { toBeEmpty, fireEvent } from 'dom-testing-library';



describe('App', () => {
    afterEach(cleanup);

    it('should render ', () => {
        const output = render(<App />);
        expect(output).toMatchSnapshot();
    })

    it('should contain header', () => {
        render(<App />);
        expect(document.querySelector('h1')).toBeVisible();
    })

    it('should contain component for input', () => {
        render(<App />);
        expect(document.getElementById('input')).toBeVisible();
    })

    it('should not be empty', () => {
        render(<App />);
        expect(document.getElementById('input')).not.toBeEmpty();
    });

    it('should have an empty input field at first', () => {
        render(<App />);
        const field = document.getElementById('inputField');
        const button = document.getElementById('addButton');
        const list = document.getElementById('list');
        
        expect(list).toBeEmpty();

        field.value = "text input";

        fireEvent.click(button);

        expect(list).not.toBeEmpty();
    });

    it('should change after input from user', () => {
        render(<App />);
        const field = document.getElementById('inputField');
        const button = document.getElementById('addButton');
        const list = document.getElementById('list');

        field.value = "text input";
        fireEvent.click(button);

        expect(list).not.toBeEmpty();
    });

});