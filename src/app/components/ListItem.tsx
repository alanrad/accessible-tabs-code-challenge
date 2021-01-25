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
  const viewMoreLabel = 'View More';
  // details mapping
  const { id, title, description, activeTab } = item;

  return (
    <div className="list-item">
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <Link to={exampleLink(id, activeTab)}>{viewMoreLabel}</Link>
    </div>
  );
};
