import React, { FC } from 'react';
// components
import { ListWrapper, ListHeader, List } from 'app/components';

export const Examples: FC = () => {
    return (
      <ListWrapper>
        <ListHeader title="Survey Results" />
        <List items={[]} />
      </ListWrapper>
    );
};