import React from 'react';
import {render, screen} from '@testing-library/react-native';
import WidgetContainer from './WidgetContainer';
import api from './api';

jest.mock('./api');

describe('WidgetContainer', () => {
  it('loads widgets upon mount', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });

    render(<WidgetContainer />);

    await screen.findByText('Widget 1');
    expect(screen.getByText('Widget 2')).toBeVisible();
  });
});
