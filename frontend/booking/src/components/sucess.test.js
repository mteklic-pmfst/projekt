import React from 'react';
import Success from './Success';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders success alert', () => {
  const { getByRole } = render(<Success message="Test success message" />);
  const alertElement = getByRole('alert');
  expect(alertElement).toHaveClass('alert-success');

});

