import React, { FC, KeyboardEvent, useState, useRef, useEffect } from 'react';
// components
import { Tab, TabPanel } from 'app/components/TabGroup';
// interfaces
import { ItabContent } from 'app/interfaces';
// constants
import { TAB_ID_EXT, TAB_PANEL_ID_EXT } from './constants';
// styles
import './tabgroup.css';

interface ItabGroup {
  label: string;
  tabs: ItabContent[];
  activeTab?: string;
  onTabSelected?: (newTabId: string) => void;
}

export const TabGroup: FC<ItabGroup> = ({
  label,
  tabs,
  activeTab = '',
  onTabSelected,
}) => {
  const tabIds: string[] = tabs.map(({ id }) => id);
  const tabsLength: number = tabIds.length;
  const [selectedTabId, updateSelectedTabId] = useState<string>(
    activeTab || tabIds[0]
  );
  const [selectedTabIndex, updateSelectedTabIndex] = useState<number>(
    tabIds.indexOf(selectedTabId)
  );

  const tabsRef = useRef<HTMLInputElement>(null);

  const focusOnTab = (tabId: string): void => {
    tabsRef.current &&
      (tabsRef.current.querySelector(
        `#${tabId}-${TAB_ID_EXT}`
      ) as HTMLInputElement).focus();
  };

  const selectNewTab = (newTabId: string): void => {
    newTabId && focusOnTab(newTabId);
    onTabSelected && newTabId && onTabSelected(newTabId);
  };

  const handleSelect = (newTabId: string): void => {
    updateSelectedTabId(newTabId);
    selectNewTab(newTabId);
  };

  useEffect(() => {
    activeTab && handleSelect(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleKeyboardNavigation = (
    event: KeyboardEvent<HTMLButtonElement>
  ): void => {
    // To change focus and tab index of tab elements with the right and left arrows
    event.preventDefault();
    let tabIndex = selectedTabIndex;
    if (event.key === 'ArrowRight' && selectedTabIndex < tabsLength - 1) {
      tabIndex = selectedTabIndex + 1; // move active tab one to the right
    } else if (event.key === 'ArrowLeft' && selectedTabIndex > 0) {
      tabIndex = selectedTabIndex - 1; // move active tab one to the left
    } else {
      return; // ignore
    }
    updateSelectedTabId(tabIds[tabIndex]);
    updateSelectedTabIndex(tabIndex);
    selectNewTab(tabIds[tabIndex]);
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    // To change the active tab and tabpanel
    // TODO: logic can be improved to write a cleaner code
    // source: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
    if (event.key === 'Tab' && tabsRef.current) {
      const current = tabsRef.current;
      const parent = current.parentNode;
      const activeTab = tabsRef.current.querySelector(
        `#${selectedTabId}-${TAB_ID_EXT}`
      ) as HTMLInputElement;
      const activeTabPanel = tabsRef.current.querySelector(
        `#${selectedTabId}-${TAB_PANEL_ID_EXT}`
      ) as HTMLInputElement;

      // Remove all current selected tabs
      parent &&
        parent
          .querySelectorAll('[aria-selected="true"]')
          .forEach(t => t.setAttribute('aria-selected', 'false'));

      // Set this tab as selected
      activeTab.setAttribute('aria-selected', 'true');

      // Hide all tab panels
      parent &&
        parent
          .querySelectorAll('[role="tabpanel"]')
          .forEach(p => p.setAttribute('aria-hidden', 'true'));

      parent &&
        parent
          .querySelectorAll('[role="tabpanel"]')
          .forEach(p => p.setAttribute('hidden', 'true'));

      // Show the selected panel
      activeTabPanel.removeAttribute('hidden');
    }
  };

  return (
    <>
      <div ref={tabsRef} className="tabs">
        <div role="tablist" aria-label={label} onKeyDown={onTabKeyDown}>
          {tabs.map(({ id, label }) => (
            <Tab
              key={id}
              id={id}
              label={label}
              isSelected={selectedTabId === id}
              onSelect={handleSelect}
              onKeyUp={handleKeyboardNavigation}
            />
          ))}
        </div>

        {tabs.map(({ id, content }) => (
          <TabPanel key={id} id={id} isSelected={selectedTabId === id}>
            <p>{content}</p>
          </TabPanel>
        ))}
      </div>
    </>
  );
};
