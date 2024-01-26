import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Thankyou } from './thankyou';

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
        expect(screen.getByText('Muhammad Moiz Siddique')).toBeInTheDocument();
        expect(screen.getByText('Engineer - lead')).toBeInTheDocument();
    });

    test('handles "Home" button click', () => {
        render(<Thankyou />);

        const homeButton = screen.getByText('Home');
        expect(homeButton).toBeInTheDocument();

        fireEvent.click(homeButton);

    });
});