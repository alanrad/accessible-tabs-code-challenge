import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// containers
import { DemoMultipleTabGroup, DemoSingleTabGroup } from 'app/containers';
// components
import { ListWrapper, ListHeader } from 'app/components';
// constants
import { EXAMPLE_ONE, EXAMPLE_TWO } from 'app/constants';
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

  // just for demonstration purposes
  if (id === EXAMPLE_ONE) {
    return (
      <ListWrapper>
        <ListHeader title={selectedExample.title} />
        <DemoMultipleTabGroup
          description={selectedExample.description}
          tabs={tabGroup}
        />
      </ListWrapper>
    );
  } else if (id === EXAMPLE_TWO) {
    return (
      <ListWrapper>
        <ListHeader title={selectedExample.title} />
        <DemoSingleTabGroup
          description={selectedExample.description}
          tabs={tabGroup}
          activeTab={active}
        />
      </ListWrapper>
    );
  } else {
    return null;
  }
};

export const ExampleDetails = withRouter(Details);
