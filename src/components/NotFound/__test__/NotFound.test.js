import NotFound from '../NotFound';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('checks if 404 page renders with correct text', () => {
  const { getByTestId } = render(<NotFound />);
  const nf = getByTestId('notfound');
  expect(nf.textContent).toBe('404 NOT FOUND');
});
