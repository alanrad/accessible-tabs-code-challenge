import React, { FC } from 'react';

interface IlistHeader {
  title: string;
}

export const ListHeader: FC<IlistHeader> = ({ title }) => (
  <div className="list-header">
    <h2 className="title">{title}</h2>
  </div>
);
