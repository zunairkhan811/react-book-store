import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import MyCategory from '../components/Categories';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../redux/books/fetchApi', () => jest.fn());

describe('MyCategory Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      data: [
        { category: 'Category 1' },
        { category: 'Category 2' },
        { category: 'Category 3' },
      ],
    });
  });

  it('should render MyCategory component', () => {
    const { container } = render(<MyCategory />);
    expect(container).toMatchSnapshot();
  });
});
