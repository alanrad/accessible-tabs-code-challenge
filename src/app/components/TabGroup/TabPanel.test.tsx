import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
// components
import { TabPanel } from './';
// constants
import { TAB_ID_EXT, TAB_PANEL_ID_EXT } from './constants';

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

describe('<TabPanel /> single tabpanel', () => {
  const id = 'single';
  const panelContent = 'content...';
  let selected = false;

  it('renders with content', () => {
    act(() => {
      render(
        <TabPanel id={id} isSelected={selected}>
          <p>{panelContent}</p>
        </TabPanel>,
        container
      );
    });
    expect(container.textContent).toBe(panelContent);
  });

  // Rendering
  it('renders with expected variable accessibility attributes when selected is "false"', () => {
    selected = false;
    act(() => {
      render(
        <TabPanel id={id} isSelected={selected}>
          <p>{panelContent}</p>
        </TabPanel>,
        container
      );
    });
    const tabPanel = document.querySelector('[role="tabpanel"]');

    expect(tabPanel && tabPanel.id).toBe(`${id}-${TAB_PANEL_ID_EXT}`);
    expect(tabPanel && tabPanel.getAttribute('tabindex')).toBe('0');
    expect(tabPanel && tabPanel.getAttribute('aria-labelledby')).toBe(
      `${id}-${TAB_ID_EXT}`
    );
    expect(tabPanel && tabPanel.getAttribute('aria-hidden')).toBe('true');
    expect(tabPanel && tabPanel.getAttribute('hidden')).toBe('');
  });

  // Snapshot Testing
  it('should render <Tab {...prop} />', () => {
    selected = true;
    act(() => {
      render(
        <TabPanel id={id} isSelected={selected}>
          <p>{panelContent}</p>
        </TabPanel>,
        container
      );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div id=\\"single-tabpanel\\" role=\\"tabpanel\\" tabindex=\\"0\\" aria-labelledby=\\"single-tab\\" aria-hidden=\\"false\\">
        <p>content...</p>
      </div>"
    `);
  });
});
