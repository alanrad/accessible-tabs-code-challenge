import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
// components
import { TabGroup } from './';
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

describe('<TabGroup /> tab group', () => {
  const label = 'JS Frameworks';
  const tabs = [
    {
      id: 'react',
      label: 'React',
      content: 'Tabpanel one',
    },
    {
      id: 'angular',
      label: 'Angular',
      content: 'Tabpanel two',
    },
    {
      id: 'ember',
      label: 'Ember',
      content: 'Tabpanel three',
    },
  ];

  // Events
  it('calls onKeyUp event to change tab to the right', () => {
    const activeTab = 'react';
    const keyboardKey = 'ArrowRight';
    act(() => {
      render(
        <TabGroup label={label} tabs={tabs} activeTab={activeTab} />,
        container
      );
    });

    const firstTab = document.querySelector(`#${activeTab}-${TAB_ID_EXT}`);
    act(() => {
      firstTab &&
        firstTab.dispatchEvent(
          new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: keyboardKey,
          })
        );
    });

    const firstTabPanel = document.querySelector(
      `#${activeTab}-${TAB_PANEL_ID_EXT}`
    );
    expect(firstTabPanel && firstTabPanel.getAttribute('hidden')).toBe('');
    const secondTabPanel = document.querySelector(
      `#angular-${TAB_PANEL_ID_EXT}`
    );
    expect(secondTabPanel && secondTabPanel.getAttribute('hidden')).toBeNull();
  });

  // Snapshot Testing
  it('should render <Tab {...prop} />', () => {
    act(() => {
      render(<TabGroup label={label} tabs={tabs} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"tabs\\">
        <div role=\\"tablist\\" aria-label=\\"JS Frameworks\\"><button id=\\"react-tab\\" role=\\"tab\\" aria-selected=\\"true\\" aria-controls=\\"react-tabpanel\\">React</button><button id=\\"angular-tab\\" role=\\"tab\\" tabindex=\\"-1\\" aria-selected=\\"false\\" aria-controls=\\"angular-tabpanel\\">Angular</button><button id=\\"ember-tab\\" role=\\"tab\\" tabindex=\\"-1\\" aria-selected=\\"false\\" aria-controls=\\"ember-tabpanel\\">Ember</button></div>
        <div id=\\"react-tabpanel\\" role=\\"tabpanel\\" tabindex=\\"0\\" aria-labelledby=\\"react-tab\\" aria-hidden=\\"false\\">
          <p>Tabpanel one</p>
        </div>
        <div id=\\"angular-tabpanel\\" role=\\"tabpanel\\" tabindex=\\"0\\" aria-labelledby=\\"angular-tab\\" aria-hidden=\\"true\\" hidden=\\"\\">
          <p>Tabpanel two</p>
        </div>
        <div id=\\"ember-tabpanel\\" role=\\"tabpanel\\" tabindex=\\"0\\" aria-labelledby=\\"ember-tab\\" aria-hidden=\\"true\\" hidden=\\"\\">
          <p>Tabpanel three</p>
        </div>
      </div>"
    `);
  });
});
