import React, { FC } from 'react';

interface IlistHeader {
  title: string;
}

export const ListHeader: FC<IlistHeader> = ({ title }) => (
  <div className="list-header">
    <h1 className="title">{title}</h1>
  </div>
);
