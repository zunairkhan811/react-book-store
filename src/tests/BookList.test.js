import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import MyBookList from '../components/BookList';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));
jest.mock('../redux/books/fetchApi', () => jest.fn());

describe('MyBookList Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      data: [
        {
          item_id: 1,
          title: 'Book 1',
          author: 'Author 1',
          category: 'Category 1',
        },
        {
          item_id: 2,
          title: 'Book 2',
          author: 'Author 2',
          category: 'Category 2',
        },
      ],
    });
  });

  it('should render MyBookList component with type', () => {
    useParams.mockReturnValue({ type: 'Category 1' });
    const { container } = render(<MyBookList />);
    expect(container).toMatchSnapshot();
  });

  it('should render MyBookList component without type', () => {
    useParams.mockReturnValue({ type: null });
    const { container } = render(<MyBookList />);
    expect(container).toMatchSnapshot();
  });
});