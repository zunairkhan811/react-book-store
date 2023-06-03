import React from 'react';
import { useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import Render from '../components/RenderBooks';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
jest.mock('../redux/books/removeDataFromApi', () => jest.fn());

describe('Render Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('should render Render component', () => {
    const props = {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      key: '1',
    };

    const { container } = render(<Render {...props} />);
    expect(container).toMatchSnapshot();
  });
});