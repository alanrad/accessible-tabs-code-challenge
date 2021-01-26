import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { Iexample } from 'app/interfaces';
// utils
import { exampleLink } from 'utils';

interface IlistItem {
  item: Iexample;
}

export const ListItem: FC<IlistItem> = ({ item }) => {
  const viewMoreLabel = 'View »';
  const { id, title, description, activeTab = '' } = item;

  return (
    <div className="list-item">
      <h2 className="title">{title}</h2>
      <p>{description}</p>
      <Link to={exampleLink(id, activeTab)}>{viewMoreLabel}</Link>
    </div>
  );
};
