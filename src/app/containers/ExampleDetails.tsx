import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// components
import { ListWrapper, ListHeader, DisplayDetails } from 'app/components';
// utils
import { getAppData } from 'utils';

interface IpathParams {
  id: string;
  active: string;
}

const Details: FC<RouteComponentProps<IpathParams>> = ({
  match: {
    params: { id, active },
  },
}) => {
  const { examples, tabGroup } = getAppData();
  const [selectedExample] = examples.filter(item => item.id === id);
  if (typeof selectedExample === 'undefined' || !selectedExample) {
    return null;
  }

  return (
    <ListWrapper>
      <ListHeader title={selectedExample.title} />
      <DisplayDetails
        description={selectedExample.description}
        tabs={tabGroup}
        activeTab={active}
      />
    </ListWrapper>
  );
};

export const ExampleDetails = withRouter(Details);
