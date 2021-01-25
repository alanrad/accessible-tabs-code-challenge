import React, { FC } from 'react';

interface IlistNotAvailable {
  title: string;
}

export const ListNotAvailable: FC<IlistNotAvailable> = ({ title }) => {
  return <div className="list-not-available">{title}</div>;
};
