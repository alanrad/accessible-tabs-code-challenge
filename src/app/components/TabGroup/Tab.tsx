import React, { FC, MouseEvent, KeyboardEvent } from 'react';
// constants
import { TAB_ID_EXT, TAB_PANEL_ID_EXT } from './constants';

interface Itab {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect?: (newTabId: string) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  ref?: (link: HTMLButtonElement) => void;
}

// An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel
export const Tab: FC<Itab> = ({ id, label, isSelected, onSelect, onKeyUp }) => (
  <button
    id={`${id}-${TAB_ID_EXT}`}
    role="tab"
    tabIndex={isSelected ? undefined : -1}
    aria-selected={isSelected}
    aria-controls={`${id}-${TAB_PANEL_ID_EXT}`}
    onClick={(event: MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      onSelect && onSelect(id);
    }}
    onKeyUp={(event): void => {
      onKeyUp && onKeyUp(event);
    }}>
    {label}
  </button>
);
