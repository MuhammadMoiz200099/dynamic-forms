import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './home';


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../redux/slices/file.slice', () => ({
  loadFileData: jest.fn(),
  resetFileData: jest.fn(),
}));

describe('Home component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockReturnValueOnce([]);
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
      }
    ]);
  });

  test('renders file upload form', () => {
    render(<Home />);

    expect(screen.getByText('File Upload')).toBeInTheDocument();
    expect(screen.getByText('Load Form')).toBeDisabled();
  });

  test('handles file selection and removal', async () => {
    render(<Home />);

    const fileInput = screen.getByLabelText('File Upload');
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['Sample content'], 'Sample.json', { lastModified: 1706300191689, lastModifiedDate: "2024-01-26T20:16:31.689Z", name: "Sample.json", size: 2994, type: "application/json" })],
      },
    });

    await waitFor(() => {
      expect(screen.getByText('Sample.json')).toBeInTheDocument();
      expect(screen.getByText('Load Form')).not.toBeDisabled();
    });

    fireEvent.click(screen.getByText('Load Form'));

  });

  test('handles file removal', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Remove File'));

    expect(screen.queryByText('Sample.json')).not.toBeInTheDocument();
    expect(screen.getByText('Load Form')).toBeDisabled();
  });
});