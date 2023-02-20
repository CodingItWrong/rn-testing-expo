import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    it('clears the message field', () => {
      render(<NewMessageForm />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Message'),
        'Hello world',
      );
      fireEvent.press(screen.getByText('Send'));
    });

    it('calls the onSend prop', () => {
      const messageText = 'Hello world';
      const sendHandler = jest.fn();
      render(<NewMessageForm onSend={sendHandler} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Message'),
        'Hello world',
      );
      fireEvent.press(screen.getByText('Send'));

      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
