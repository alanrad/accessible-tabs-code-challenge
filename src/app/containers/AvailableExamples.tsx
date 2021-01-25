import React, { FC } from 'react';
// components
import { ListWrapper, ListHeader, List } from 'app/components';
// interfaces
import { Iexample } from 'app/interfaces';

interface IavailableExamples {
  examples: Iexample[];
}

export const AvailableExamples: FC<IavailableExamples> = ({ examples }) => {
  const headerTitle = 'Examples';

  return (
    <ListWrapper>
      <ListHeader title={headerTitle} />
      <List items={examples} />
    </ListWrapper>
  );
};
