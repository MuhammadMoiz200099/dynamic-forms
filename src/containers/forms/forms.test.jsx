import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forms from './forms';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

    expect(screen.getByPlaceholderText('Enter Username')).toHaveAttribute('name', 'username');
    expect(screen.getByPlaceholderText('Enter Username')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Please select job title')).toHaveAttribute('name', 'jobtitle');
    expect(screen.getByPlaceholderText('Please select job title')).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<Forms />);

    const nameInput = screen.getByPlaceholderText('Enter Username');
    fireEvent.change(nameInput, { target: { value: 'Muhammad Moiz Siddique' } });
    expect(nameInput.value).toBe('Muhammad Moiz Siddique');

    const selectInput = screen.getByPlaceholderText('Please select job title');
    fireEvent.change(selectInput, { target: { value: 'Engineer - lead' } });
    expect(selectInput.value).toBe('Engineer - lead');
  });

  test('submits form data', async () => {
    render(<Forms />);

    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    fireEvent.change(screen.getByPlaceholderText('Enter Username'), { target: { value: 'Muhammad Moiz Siddique' } });
    fireEvent.change(screen.getByPlaceholderText('Please select job title'), { target: { value: 'Engineer - lead' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/app/thankyou');
    });
  });
});
