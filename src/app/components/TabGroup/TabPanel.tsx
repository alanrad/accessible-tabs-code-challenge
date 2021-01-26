import React, { FC, ReactNode } from 'react';

interface ItabPanel {
  id: string;
  isSelected: boolean;
  children: ReactNode;
}

// The element that contains the content associated with a tab
export const TabPanel: FC<ItabPanel> = ({ id, isSelected, children }) => (
  <div
    id={`${id}-tabpanel`}
    role="tabpanel"
    tabIndex={0}
    aria-labelledby={`${id}-tab`}
    aria-hidden={!isSelected}
    hidden={!isSelected}>
    {children}
  </div>
);
