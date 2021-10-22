import Navbar from '../Navbar';
import { render as rtl } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../state/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component) =>
  rtl(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('checks if navbar renders with correct text', () => {
  const { getByTestId } = render(<Navbar />);
  const nb = getByTestId('navbartst');
  expect(nb.textContent).toBe('Dashboard');
});
