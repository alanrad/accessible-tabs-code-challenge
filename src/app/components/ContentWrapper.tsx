import React, { FC, ReactNode } from 'react';

interface IlistHeader {
  appName: string;
  children: ReactNode;
}

export const ContentWrapper: FC<IlistHeader> = ({ appName, children }) => (
  <div className="app-wrapper">
    <div className="app-header">
      <h1 className="title">{appName}</h1>
    </div>
    <div className="content-container">{children}</div>
  </div>
);
