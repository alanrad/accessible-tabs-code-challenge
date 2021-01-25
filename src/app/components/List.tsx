import React, { FC } from 'react';
// interfaces
import { Iexample } from 'app/interfaces';
// components
import { ListItem, ListNotAvailable } from 'app/components';

interface Ilist {
  items: Iexample[];
}

export const List: FC<Ilist> = ({ items }) => {
  const notFound = 'No example available';
  if (!items.length) {
    return <ListNotAvailable title={notFound} />;
  }

  return (
    <>
      {items.map((item: Iexample) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};
