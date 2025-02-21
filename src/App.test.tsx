import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders timer starting at 0:00', () => {
    render(<App />);
    const timerElement = screen.getByRole('timer');
    expect(timerElement).toHaveTextContent('0:00');
  });

  test('has start and reset buttons', () => {
    render(<App />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });
});
