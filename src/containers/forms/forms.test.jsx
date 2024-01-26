import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Forms } from './forms';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../redux/slices/file.slice', () => ({
  resetFileData: jest.fn(),
  submitFormData: jest.fn(),
}));

describe('Forms component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockReturnValue([
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
  });

  test('renders form with input fields', () => {
    render(<Forms />);

    // You can use screen.getByLabelText, screen.getByPlaceholderText, etc.
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Username')).toBeInTheDocument();

    expect(screen.getByLabelText('job Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Please select job title')).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<Forms />);

    const nameInput = screen.getByLabelText('Username');
    fireEvent.change(nameInput, { target: { value: 'Muhammad Moiz Siddique' } });
    expect(nameInput.value).toBe('John');

    const selectInput = screen.getByLabelText('job Title');
    fireEvent.change(selectInput, { target: { value: 'Engineer - lead' } });
    expect(selectInput.value).toBe('Engineer - lead');
  });

  test('submits form data', async () => {
    render(<Forms />);

    // Mock the dispatch function
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Mock the navigate function
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    // Fill in form data
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'Muhammad Moiz Siddique' } });
    fireEvent.change(screen.getByLabelText('Muhammad Moiz Siddique'), { target: { value: 'Engineer - lead' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for asynchronous actions to complete (e.g., submitFormData)
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/app/thankyou');
    });
  });
});
