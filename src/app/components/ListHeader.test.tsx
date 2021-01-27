import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ListHeader } from './ListHeader';

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container;
});

it('listheader renders with a title', () => {
  const title = 'Page Title';
  act(() => {
    render(<ListHeader title={title} />, container);
  });
  expect(container.textContent).toBe(title);
});
