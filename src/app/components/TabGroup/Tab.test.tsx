import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
// components
import { Tab } from './';
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

describe('<Tab /> single tab button', () => {
  const id = 'single';
  const label = 'Single Tab';
  let selected = false;

  // Rendering
  it('renders with expected label, id & aria-controls', () => {
    act(() => {
      render(<Tab id={id} label={label} isSelected={selected} />, container);
    });
    const tab = document.querySelector('[role="tab"]');

    expect(container.textContent).toBe(label);
    expect(tab && tab.id).toBe(`${id}-${TAB_ID_EXT}`);
    expect(tab && tab.getAttribute('aria-controls')).toBe(
      `${id}-${TAB_PANEL_ID_EXT}`
    );
  });

  // Rendering
  it('renders with expected variable accessibility attributes when selected is "false"', () => {
    act(() => {
      render(<Tab id={id} label={label} isSelected={selected} />, container);
    });
    const tab = document.querySelector('[role="tab"]');

    expect(container.textContent).toBe(label);
    expect(tab && tab.getAttribute('tabindex')).toBe('-1');
    expect(tab && tab.getAttribute('aria-selected')).toBe(`${selected}`);
  });

  // Rendering
  it('renders with expected variable accessibility attributes when selected is "true"', () => {
    selected = true;
    act(() => {
      render(<Tab id={id} label={label} isSelected={selected} />, container);
    });
    const tab = document.querySelector('[role="tab"]');

    expect(container.textContent).toBe(label);
    expect(tab && tab.getAttribute('tabindex')).toBeNull();
    expect(tab && tab.getAttribute('aria-selected')).toBe(`${selected}`);
    expect(tab && tab.getAttribute('aria-controls')).toBe(
      `${id}-${TAB_PANEL_ID_EXT}`
    );
  });

  // Events
  it('calls onClick event when clicked', () => {
    selected = false;
    const onSelect = jest.fn();
    act(() => {
      render(
        <Tab id={id} label={label} isSelected={selected} onSelect={onSelect} />,
        container
      );
    });

    const tab = document.querySelector('[role="tab"]');
    act(() => {
      tab && tab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  // Events
  it('callback returns correct active tab id when clicked', () => {
    selected = false;
    let tabId = '';
    const setActiveTabId = (newTabId: string): void => {
      tabId = newTabId;
    };
    act(() => {
      render(
        <Tab
          id={id}
          label={label}
          isSelected={selected}
          onSelect={setActiveTabId}
        />,
        container
      );
    });
    const tab = document.querySelector('[role="tab"]');
    act(() => {
      tab && tab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(tabId).toBe(id);
  });

  // Events
  it('callback returns correct key value when pressed', () => {
    selected = false;
    const keyboardKey = 'Tab';
    let selectedKey = '';
    const onKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
      selectedKey = event.key;
    };
    act(() => {
      render(
        <Tab id={id} label={label} isSelected={selected} onKeyUp={onKeyUp} />,
        container
      );
    });
    const tab = document.querySelector('[role="tab"]');
    act(() => {
      tab &&
        tab.dispatchEvent(
          new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: keyboardKey,
          })
        );
    });

    expect(selectedKey).toBe(keyboardKey);
  });

  // Snapshot Testing
  it('should render <Tab {...prop} />', () => {
    selected = true;
    act(() => {
      render(<Tab id={id} label={label} isSelected={selected} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<button id=\\"single-tab\\" role=\\"tab\\" aria-selected=\\"true\\" aria-controls=\\"single-tabpanel\\">Single Tab</button>"`
    );
  });
});
