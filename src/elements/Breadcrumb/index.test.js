import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from ".";

const setup = () => {
  const breadcrumbList = [
    {pageTitle: 'Home', pageHref: '/'},
    {pageTitle: 'Projects', pageHref: '/projects'}
  ]

  const {container} = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector('.breadcrumb');

  return {
    breadcrumb
  };
}

test('should have <ol> with className .breadcrumb and have text Home & Projects', () => {
  const {breadcrumb} = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent('Home');
  expect(breadcrumb).toHaveTextContent('Projects');
})