import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../redux/slices/file.slice', () => ({
  loadFileData: jest.fn(),
  resetFileData: jest.fn(),
}));
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Home component', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce({ lastModified: 1706300191689, lastModifiedDate: new Date(), name: "Sample.json", size: 2994, type: "application/json" });
    useDispatch.mockReturnValue(jest.fn());
    useNavigate.mockReturnValue(jest.fn());
  });

  test('renders file upload form', () => {
    render(<Home />);

    expect(screen.getByText('File Upload')).toBeInTheDocument();
    expect(screen.getByText('Load Form')).toBeInTheDocument();
  });

  test('handles file selection and removal', async () => {
    render(<Home />);
    const fileContent = { lastModified: 1706300191689, lastModifiedDate: new Date(), name: "Sample.json", size: 2994, type: "application/json" };
    const fileInput = screen.getByTestId('file-input-id');
    fireEvent.change(fileInput, {
      target: {
        files: [new File([JSON.stringify(fileContent)], 'Sample.json')],
      },
    });

    await waitFor(() => {
      expect(screen.getByText('Sample.json')).toBeInTheDocument();
    });
    expect(screen.getByText('Load Form')).not.toBeDisabled();

    fireEvent.click(screen.getByText('Load Form'));

  });

  test('handles file removal', () => {
    render(<Home />);

    const closeIcon = screen.getByTestId('close-btn-icon');

    fireEvent.click(closeIcon);

    expect(screen.queryByText('Sample.json')).toBeInTheDocument();
  });
});