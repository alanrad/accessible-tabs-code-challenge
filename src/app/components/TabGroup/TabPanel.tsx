import React, { FC, ReactNode } from 'react';
// constants
import { TAB_ID_EXT, TAB_PANEL_ID_EXT } from './constants';

interface ItabPanel {
  id: string;
  isSelected: boolean;
  children: ReactNode;
}

// The element that contains the content associated with a tab
export const TabPanel: FC<ItabPanel> = ({ id, isSelected, children }) => (
  <div
    id={`${id}-${TAB_PANEL_ID_EXT}`}
    role="tabpanel"
    tabIndex={0}
    aria-labelledby={`${id}-${TAB_ID_EXT}`}
    aria-hidden={!isSelected}
    hidden={!isSelected}>
    {children}
  </div>
);
