import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  it('should render Button component', () => {
    const props = {
      type: 'button',
      className: 'my-button',
      onClick: jest.fn(),
      value: 'Click me',
    };

    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render Button component with default onClick', () => {
    const props = {
      type: 'submit',
      className: 'my-button',
      value: 'Submit',
    };

    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });
});
