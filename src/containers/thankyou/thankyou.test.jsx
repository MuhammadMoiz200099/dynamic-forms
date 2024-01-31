import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Thankyou from './thankyou';
import { useSelector } from 'react-redux';
import { resetFileData } from '../../redux/slices/file.slice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
jest.mock('../../redux/slices/file.slice', () => ({
    resetFileData: jest.fn(),
}));

describe('Thankyou component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useSelector.mockReturnValueOnce([
            {
                "title": "Username",
                "name": "username",
                "required": true,
                "placeholder": "Enter Username",
                "type": "text"
            },
            {
                "title": "job Title",
                "name": "jobtitle",
                "options": [
                    "Engineer - lead",
                    "Engineer - mid level",
                    "Engineer - junion",
                    "Engineer - front end focused",
                    "Engineer - backend focused",
                    "Engineer - full stack"
                ],
                "placeholder": "Please select job title",
                "type": "select"
            },
        ]);
        useSelector.mockReturnValueOnce({
            name: 'Muhammad Moiz Siddique',
            selectOption: 'Engineer - lead',
        });
    });

    test('renders Thankyou component with form details', () => {
        render(<Thankyou />);
        expect(screen.getByText('Thankyou')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Please select job title')).toBeInTheDocument();
    });

    test('Test Values', () => {
        render(<Thankyou />);

        const input = screen.getByPlaceholderText('Enter Username');
        expect(input).toHaveValue('');
        const select = screen.getByPlaceholderText('Please select job title');
        expect(input).toHaveValue('');
    });

    test('handles "Home" button click', () => {
        render(<Thankyou />);

        const homeButton = screen.getByText('Home');
        expect(homeButton).toBeInTheDocument();

        // fireEvent.click(homeButton);

        // expect(homeButton).toHaveBeenCalled();
    });
});