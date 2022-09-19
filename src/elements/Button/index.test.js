import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import Button from '.';

test('should render span with disabled class when isDisabled is present', () => {
  const { container } = render(<Button isDisabled>Kirim</Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('should show loading/render when isLoading is present', () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

test('should render <a> tag when props type is "link"', () => {
  const { container } = render(<Button type='link' isExternal></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});

test('should render <a> tag when props type is "link" but not to external', () => {
  const { container } = render(
    <Router>
      <Button href='' type='link'></Button>
    </Router>
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});
