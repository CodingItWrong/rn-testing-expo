import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Hello from './Hello';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    render(<Hello name="Josh" />);
    expect(screen.getByText('Hello, Josh!')).toBeVisible();
  });
});
