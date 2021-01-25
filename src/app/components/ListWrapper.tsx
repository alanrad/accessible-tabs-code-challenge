import React, { FC, ReactNode } from 'react';

interface IlistWrapper {
  children: ReactNode;
}

export const ListWrapper: FC<IlistWrapper> = ({ children }) => (
  <div className="list-wrapper">{children}</div>
);
